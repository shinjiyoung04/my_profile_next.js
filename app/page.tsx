import TopicsList from '@/components/TopicsList'
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">My project List📋</h1>
      <p className="mb-4">Details can be found on the my profile page.</p>
      <TopicsList />
    </div>
  )
}
