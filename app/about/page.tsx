import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="about-container p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        안녕하세요. 신지영이리고 합니다. 23학년 중부대 정보보호학과에 재학
        중입니다. 취미는 여름에는 비즈공예, 겨울에는 뜨개질을 즐기고 있습니다.
        그리고 만화를 좋아합니다. 2살 터울에 오빠가 컴퓨터를 좋아해서 마찬가지로
        좋아하게 됐습니다.
        <br />
        Hello, my name is Shin Jiyoung. I am majoring in information protection
        at Jungbu University in the 23rd grade. My hobby is to make beads in the
        summer and knit in the winter. And I like cartoons. My brother likes
        computers when I was 2 years old.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Information</h2>
      <ul className="mb-4">
        <li>Email: shinspace04@kakao.com</li>
        <li>Phone: 010-0000-0000</li>
        <li>
          <Link
            href="https://www.notion.so/invite/c17d0129b5468f491afc60a8d91eef75cadcefcb"
            passHref
          >
            Notion:
            <span className="text-blue-600">
              https://www.notion.so/invite/c17d0129b5468f491afc60a8d91eef75cadcefcb
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/shinjiyoung04/" passHref>
            GitHub:
            <span className="text-blue-600">
              https://github.com/shinjiyoung04/
            </span>
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Experience</h2>
      <div className="mb-4">
        <h3 className="font-bold">Dream Job: security developer</h3>
        <p>Location | Month Year - Present</p>
        <ul className="list-disc list-inside">
          <li>Responsibility or achievement 1.</li>
          <li>Responsibility or achievement 2.</li>
          <li>Responsibility or achievement 3.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">
          Previous Job Title at Previous Company Name
        </h3>
        <p>Location | Month Year - Month Year</p>
        <ul className="list-disc list-inside">
          <li>Responsibility or achievement 1.</li>
          <li>Responsibility or achievement 2.</li>
          <li>Responsibility or achievement 3.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
      <div className="mb-4">
        <h3 className="font-bold">Degree in Field of Study</h3>
        <p>University Name | Month Year - Month Year</p>
      </div>

      {/* Add more sections as needed */}
    </div>
  )
}

export default About
