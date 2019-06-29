json.array! @messages do |message|
  json.id message.id
  json.user_id messsage.user_id
  json.content message.content
  json.time message.created_at
end