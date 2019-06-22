class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  mount_uploader :file, ImageUploader
  validates :content, presence: true, unless: :image?
end
