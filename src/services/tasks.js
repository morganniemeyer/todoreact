import { checkError, client } from './client.js';

export async function getListTasks() {
  const response = await client.from('tasks').select();

  return checkError(response);
}
export async function createTask(description) {
  const response = await client.from('tasks').insert([{ description }]).single();
  return checkError(response);
}
