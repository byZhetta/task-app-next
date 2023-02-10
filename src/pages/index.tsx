import {Task} from "src/interfaces/Task";

interface Props {
  tasks: Task[]
}
4
export default function index({ tasks }: Props) {
  return <>{ tasks.length === 0 ? <h1>no tasks</h1> : <h1>tasks</h1> }</>;
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json()
  return {
    props: {
      tasks: tasks,
    },
  };
};