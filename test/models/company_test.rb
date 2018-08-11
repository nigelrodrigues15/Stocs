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

require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
