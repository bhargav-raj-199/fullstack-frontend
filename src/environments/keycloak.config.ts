import {KeycloakConfig} from 'keycloak-js'

const keycloakConfig: KeycloakConfig={
    url:'http://localhost:8080',
    realm: 'mobile-store',
    clientId: 'mobile-store-service'
};

export default keycloakConfig;