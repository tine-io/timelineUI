import Vue from 'vue';

export async function updateToken(){
    await Vue.$keycloak.updateToken(70);
    // console.log(Vue.$keycloak.token)
    return Vue.$keycloak.token;
}