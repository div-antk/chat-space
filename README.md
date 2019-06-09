# DB設計

## membersテーブル
<!-- 中間テーブル -->

| Column   | Type      | Options                        |
| -------- | --------- | ------------------------------ |
| user_id  | reference | null: false, foreign_key: true |
| group_id | reference | null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

---

## usersテーブル

| Column   | Type   | Options                   |
| -------- | ------ | ------------------------- |
| name     | string | null: false,              |
| email    | string | null: false, unique: true |
| password | string | null: false               |

### Association
- has_many :messages
- has_many :groups, through: :members

---

## groupsテーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association
- has_many :messages
- has_many :users, through: :members

---

## messagesテーブル

| Column  | Type      | Options     |
| ------- | --------- | ----------- |
| user_id | reference | null: false |
| text    | string    | null: false |
| image   | string    |             |

### Association
- belongs_to :user
- belongs_to :group