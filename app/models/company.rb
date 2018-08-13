# == Schema Information
#
# Table name: companies
#
#  id         :bigint(8)        not null, primary key
#  symbol     :string           not null
#  lastsale   :float            not null
#  name       :string           not null
#  sector     :string
#  industry   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Company < ApplicationRecord
    validates :symbol, :lastsale, :name, presence: true
    validates :symbol, uniqueness: true


end
