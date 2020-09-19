import Api from 'api'

export async function edit (project) {
  const res = await Api.Project.edit({
    project_id: project.project_id,
    project_name: project.project_name
  })
  if (!res.succeed) return
  console.log(res.message)
}
