
import { init, id } from '@instantdb/react';
import {mainStore} from "@/Store/main.js";

const setAccount = mainStore.getState().setAccount;

export const db = init({
    appId: import.meta.env.VITE_INSTANT_DB_KEY,
});

export const addAccount = async (account)=>{
   await db.transact(
        db.tx.accounts[id()].update({
            facebook_app_id: account?.ACCOUNT_ID,
            facebook_id: account?.USER_ID,
            facebook_name: account?.NAME,
            created_at: new Date(),
        }),
    );
}

export const updateMode = (mode, id)=>{
    db.transact(
        db.tx.accounts[id].update({
            facebook_mode: mode,
            updated_at: new Date(),
        }),
    );
}

export const updateBlur = (status, id)=>{
    db.transact(
        db.tx.accounts[id].update({
            image_blur: status,
            updated_at: new Date(),
        }),
    );
}


export const getAccount = async (userInfo)=>{
    const query = {
        accounts: {
            $: {
                where: {
                    facebook_id: userInfo?.USER_ID
                }
            }
        }
    }

    const { data } = await db.queryOnce(query)

    if(data.accounts.length && data?.accounts[0] && data?.accounts[0]?.facebook_id){

        setAccount(data?.accounts[0]);
    }
}
