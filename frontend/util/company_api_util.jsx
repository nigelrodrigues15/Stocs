export const fetchCompanies = () => (
    $.ajax({
      method: "GET",
      url: "/api/companies"
    })
  )
  
  export const fetchCompany = companyId => (
    $.ajax({
      method: "GET",
      url: `/api/companies/${companyId}`
    })
  )

  export const updateLastSale = company => (
    $.ajax({
      method: "PATCH",
      url: `/api/companies/${company.id}`,
      data: { company }
    })
  )
