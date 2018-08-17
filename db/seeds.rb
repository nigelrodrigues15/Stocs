# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'
require 'csv'

User.destroy_all
User.create({fname: "Nigel", lname: "Rodrigues", email: "nigel1@ualberta.ca", username: "nigel", password: "0123456789"})

# "/Users/appacademy/Desktop/RobinHood-Clone"
# p "#{Rails.root}"
# data = CSV.read("NASDAQ.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
# data = CSV.read("/app/assets/companies/NASDAQ.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
data1 = CSV.read("#{Rails.root}/app/assets/companies/NASDAQ.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
data2 = CSV.read("#{Rails.root}/app/assets/companies/NYSE.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
data3 = CSV.read("#{Rails.root}/app/assets/companies/AMEX.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})

hashed_data1 = data1.map { |d| d.to_hash }
hashed_data2 = data2.map { |d| d.to_hash }
hashed_data3 = data3.map { |d| d.to_hash }

columnns = [:symbol, :name, :lastsale, :sector, :industry]

filtered_hash1 = hashed_data1.each do |hash|
    hash.keep_if do |key,val|
        columnns.include?(key)
    end
end

filtered_hash2 = hashed_data2.each do |hash|
    hash.keep_if do |key,val|
        columnns.include?(key)
    end
end

filtered_hash3 = hashed_data3.each do |hash|
    hash.keep_if do |key,val|
        columnns.include?(key)
    end
end

Company.destroy_all
filtered_hash1.each do |company|
    Company.create(company)
end
filtered_hash2.each do |company|
    Company.create(company)
end
filtered_hash3.each do |company|
    Company.create(company)
end

# p filtered_hash.select{|hash| hash[:symbol] == "FB"}
# p filtered_hash