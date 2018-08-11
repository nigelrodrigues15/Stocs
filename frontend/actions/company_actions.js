import * as CompanyAPIUtil from '../utils/company_api_util';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";


export const fetchCompanies = () => dispatch => (
    CompanyAPIUtil.fetchAssets().then(company => (
    dispatch(receiveAssets(company)))
    )
);

export const fetchCompany = companyId => dispatch => (
    CompanyAPIUtil.fetchAsset(companyId).then(company => (
        dispatch(receiveAsset(company)))
    )
);

export const updateLastSale = company => dispatch => (
    CompanyAPIUtil.updateLastPrice(company).then(company => (
        dispatch(receiveAsset(company)))
    )
);

export const receiveCompanies = companies => (
    type: RECEIVE_COMPANIES,
    companies
  )
};

export const receiveCompany = company => (
    type: RECEIVE_COMPANY,
    company
  )
};