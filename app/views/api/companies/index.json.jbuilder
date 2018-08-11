@companies.each do |company|
    json.set! company.id do
      json.extract! company, :symbol, :lastsale, :name, :sector, :industry
    end
  end