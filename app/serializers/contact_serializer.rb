class ContactSerializer < ActiveModel::Serializer
  attributes :id, :phone, :first_name, :last_name
end
