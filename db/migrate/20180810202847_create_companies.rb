class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :symbol, null: false
      t.float :lastsale, null: false
      t.string :name, null: false
      t.string :sector
      t.string :industry

      t.timestamps
    end

    add_index :companies, :symbol, unique: true
    add_index :companies, :name
  end
end
