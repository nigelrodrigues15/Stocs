class Company < ApplicationRecord
    validates :symbol, :lastsale, :name, presence: true
    validates :symbol, uniqueness: true


end
