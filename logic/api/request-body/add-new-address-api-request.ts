export interface AccountAddress {
    data:
    {
        input: {
            firstname: string,
            lastname: string,
            postcode: string,
            telephone: string,
            default_billing: boolean,
            default_shipping: boolean,
            city: string,
            country_id: string,
            street: string []
        }
    }
}

export interface Street{
    streetName:string,
    streetNumber:string,
    homeNumber:string
}

export const buildAddressRequest = (firstname: string, lastname: string, postcode: string, telephone: string, city: string, country_id: string, street:Street): AccountAddress => {
    return {
        data: {
            input: {
                firstname,
                lastname,
                postcode,
                telephone,
                default_billing: false,
                default_shipping: false,
                city,
                country_id,
                street:[
                    street.streetName,
                    street.streetNumber,
                    street.homeNumber
                ]
            }
        }
    };
};