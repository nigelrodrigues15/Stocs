export const fetchCompanies = () => (
    $.ajax({
      method: "GET",
      url: "/api/company"
    })
  )
  
  export const fetchCompany = companyId => (
    $.ajax({
      method: "GET",
      url: `/api/company/${companyId}`
    })
  )
  
  export const updateLastSale = company => (
    $.ajax({
      method: "PATCH",
      url: `/api/company/${company.id}`,
      data: { company }
    })
  )
