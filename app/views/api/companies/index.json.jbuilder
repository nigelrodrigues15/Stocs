@companies.each do |company|
    json.set! company.id do
      json.extract! company, :id, :symbol, :lastsale, :name, :sector, :industry
    end
  end