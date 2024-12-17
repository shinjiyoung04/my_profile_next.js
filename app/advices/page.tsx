'use client'

import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import styles from '@/AdvicePage.module.css'

interface Advice {
  id: string
  author: string
  content: string
}

export default function AdvicePage() {
  const { data: session } = useSession()
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [advices, setAdvices] = useState<Advice[]>([]) // 조언 리스트 상태 추가
  const [editingId, setEditingId] = useState<string | null>(null)

  // 컴포넌트가 마운트될 때 조언 데이터를 가져오는 함수
  useEffect(() => {
    fetchAdvices()
  }, [])

  const fetchAdvices = async () => {
    try {
      const response = await fetch('/api/advice')
      if (response.ok) {
        const data = await response.json()
        setAdvices(data)
      } else {
        console.error('조언 목록 가져오기 실패:', response.statusText)
      }
    } catch (error) {
      console.error('조언 목록 가져오기 중 오류 발생:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!session) {
      alert('로그인이 필요합니다.')
      return
    }

    const response = await fetch('/api/advice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, content }),
    })

    if (response.ok) {
      // 성공적으로 추가된 경우
      fetchAdvices() // 새로 추가된 조언을 포함하여 리스트를 다시 가져옴
      setAuthor('')
      setContent('')
    } else {
      console.error('조언 제출 실패:', response.statusText)
    }
  }

  if (!session) {
    return <p>로그인이 필요합니다.</p>
  }

  return (
    <div className={styles.container}>
      <h1>조언 공유하기</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="author">작성자:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">조언 내용:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">제출</button>
      </form>

      <h2>작성한 조언 리스트</h2>
      {advices.length === 0 ? (
        <p>작성된 조언이 없습니다.</p>
      ) : (
        <ul className={styles.adviceList}>
          {advices.map((advice) => (
            <li key={advice.id} className={styles.adviceItem}>
              <p>
                <strong>작성자:</strong> {advice.author}
              </p>
              <p>
                <strong>내용:</strong> {advice.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
