json.(@message, :content, :image)
json.created_at @message.created_at.strftime('%Y/%m/%d %R')
json.user_name @message.user.name
# json.image.url @message.image.url
json.id @message.id
