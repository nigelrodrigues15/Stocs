import * as CompanyAPIUtil from '../util/company_api_util';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";


export const fetchCompanies = () => dispatch => (
    CompanyAPIUtil.fetchCompanies().then(company => (
    dispatch(receiveCompanies(company)))
    )
);

export const fetchCompany = companyId => dispatch => (
    CompanyAPIUtil.fetchCompany(companyId).then(company => (
        dispatch(receiveCompany(company)))
    )
);

export const updateLastSale = company => dispatch => (
    CompanyAPIUtil.updateLastSale(company).then(company => (
        dispatch(receiveCompany(company)))
    )
);

export const receiveCompanies = companies => ({
    type: RECEIVE_COMPANIES,
    companies
})


export const receiveCompany = company => ({
    type: RECEIVE_COMPANY,
    company
})
