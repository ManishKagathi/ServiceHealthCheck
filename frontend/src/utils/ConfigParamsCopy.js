

export const services = {
    Onboarding: {
        PMLService: {
            'pf-crm': 'https://pf-stg.paytmmoney.com/pf-crm/status',
            'pf-dms': 'https://pf-stg.paytmmoney.com/pf-dms/v1/status',
            'pf-apollo': 'https://pf-stg.paytmmoney.com/pf-apollo/health-check',
            'pf-kyc_kra': 'https://pf-stg.paytmmoney.com/pf-masterdata/status',
            'old-kyc': 'https://api-staging.paytmmoney.com/kyc/v2/master/relation',
            'pf-masterdata': 'https://pf-stg.paytmmoney.com/pf-masterdata/status',
            'kyc': 'https://api-staging.paytmmoney.com/kyc/v2/master/relation',
            'pf-user-audit': 'https://pf-stg.paytmmoney.com/pf-user-audit/status',
            'pf-kyc-service': 'https://pf-stg.paytmmoney.com/pf-kyc/status',
            'pf-kyc-kra-service': 'https://pf-stg.paytmmoney.com/pf_kyc_kra/status',
            'pf-kyc-collaborator': 'https://pf-stg.paytmmoney.com/pf-kyc-collaborator/status',
        },
        ThirdPartyService: {
            // Dummy Get Apis
            'pf-userprofile-scheduler': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-userprofile-internal': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-userprofile-api': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-passcode': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-onboarding-perf-apis': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-onboarding-micro-consumers': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-onboarding-comm-consumer': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-onboarding-activity-log-consumer': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-oauth-token-validator': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-merchant-onboarding': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-login': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pm-tarrifs': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-invoice-service': '',
            'pf-esign': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-audit-service': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'paytmmoney': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
            'pf-onboarding': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416'
        }
    },
    Bank: {
        PMLService: {
            'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
        },
        ThirdPartyService: {
            'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
        },
    },
    Growth: {
        PMLService: {
            'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
        },
        ThirdPartyService: {
            'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
        },
    },
    Subscription: {
        PMLService: {
            'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
        },
        ThirdPartyService: {
            'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
        },
    },
};














// export const services = {
//     Onboarding: {
//         'pf-crm': 'https://pf-stg.paytmmoney.com/pf-crm/status',
//         'pf-dms': 'https://pf-stg.paytmmoney.com/pf-dms/v1/status',
//         'pf-apollo': 'https://pf-stg.paytmmoney.com/pf-apollo/health-check',
//         'pf-kyc_kra': 'https://pf-stg.paytmmoney.com/pf-masterdata/status',
//         'old-kyc': 'https://api-staging.paytmmoney.com/kyc/v2/master/relation',
//         'pf-masterdata': 'https://pf-stg.paytmmoney.com/pf-masterdata/status',
//         'kyc': 'https://api-staging.paytmmoney.com/kyc/v2/master/relation',
//         'pf-user-audit': 'https://pf-stg.paytmmoney.com/pf-user-audit/status',
//         'pf-kyc-service': 'https://pf-stg.paytmmoney.com/pf-kyc/status',
//         'pf-kyc-kra-service': 'https://pf-stg.paytmmoney.com/pf_kyc_kra/status',
//         'pf-kyc-collaborator': 'https://pf-stg.paytmmoney.com/pf-kyc-collaborator/status',

//         // Dummy Get Apis
//         'pf-userprofile-scheduler': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-userprofile-internal': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-userprofile-api': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-passcode': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-onboarding-perf-apis': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-onboarding-micro-consumers': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-onboarding-comm-consumer': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-onboarding-activity-log-consumer': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-oauth-token-validator': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-merchant-onboarding': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-login': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pm-tarrifs': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-invoice-service': '',
//         'pf-esign': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-audit-service': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'paytmmoney': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416',
//         'pf-onboarding': 'https://api-staging.paytmmoney.com/pm/api/v2/users/boot/410767416'
//     },
//     Bank: {
//         'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
//     },
//     Growth: {
//         'pf-bank': 'https://pf-stg.paytmmoney.com/pf-crm/status'
//     },
//     Subscription: {
//         'pf-subscription-service': 'https://pf-stg.paytmmoney.com/subscription//health-check'
//     }
// };