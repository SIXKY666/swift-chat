import { createClient } from '@supabase/supabase-js'

const service_role = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZid3J0ZmJodGJnZGx5anhobmpoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjI2MDcxOCwiZXhwIjoyMDA3ODM2NzE4fQ.zVHeeNoBaWgs1QJpMoNercb2pTlf2QOkvClcl0C5XAg'
const url = 'https://vbwrtfbhtbgdlyjxhnjh.supabase.co'
const anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZid3J0ZmJodGJnZGx5anhobmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNjA3MTgsImV4cCI6MjAwNzgzNjcxOH0.nCzanIn7xES3DYgl8n-y55UWBBHjwosS6cDWNb3nZLc'
const supabase = createClient(url,anon);

export async function GET (request:any){
  const { data, error } = await supabase
    .from('user')
    .select()
    
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}