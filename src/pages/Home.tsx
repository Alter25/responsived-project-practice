import Layout from "../layouts/Layout"
import NewTask from "../components/NewTask"
import TaskLiskt from "../components/TaskList"


export default function Home() {
  return <Layout>
    <div>
      <NewTask />
      <TaskLiskt/>  
    </div>
  </Layout>
}