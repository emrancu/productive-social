import { init, i, id } from "@instantdb/core";

// Optional: Declare your schema!
const schema = i.schema({
    entities: {
        accounts: i.entity({
            facebook_app_id: i.any(),
            facebook_id: i.any(),
            facebook_mode: i.any(),
            facebook_name: i.any(),
            image_blur: i.any(),
            created_at: i.date(),
            updated_at: i.date(),
        }),
        analytics: i.entity({
            facebook_id: i.any(),
            follow: i.number(),
            join_group: i.number(),
            listings: i.number(),
            may_know: i.number(),
            reels: i.number(),
            sponsored: i.number(),
        }),
    },
});


const db = init({ appId: import.meta.env.VITE_INSTANT_DB_KEY, schema, devtool: false });

export const  getAccount = async (userInfo:any)=> {

    const { data } = await db.queryOnce({accounts: {
            $: {
                where: {
                    facebook_id: userInfo.USER_ID
                }
            }
        }});

    if(data) {


        if (data.accounts.length && data?.accounts[0] && data?.accounts[0]?.facebook_id) {
            return data.accounts[0]
        }

        return null
    }
}

export const addAccount = async (account: any)=>{
   await db.transact(
        db.tx.accounts[id()].update({
            facebook_app_id: account?.ACCOUNT_ID,
            facebook_id: account?.USER_ID,
            facebook_name: account?.NAME,
            created_at: Date.now(),
        }),
    );
}


export const updateMode = async (mode:any, id: any)=>{
   await db.transact(
        db.tx.accounts[id].update({
            facebook_mode: mode,
            updated_at:  Date.now(),
        }),
    );
}


export const updateBlur = async (status: boolean, id: any)=>{
  await  db.transact(
        db.tx.accounts[id].update({
            image_blur: status,
            updated_at: Date.now(),
        }),
    );
}


export const UpdateAnalytics = (id:any, data: any)=>{
    db.transact(
        db.tx.analytics[id].update({
            facebook_id: id,
            follow: data.follow,
            join_group: data.join_group,
            listings: data.listings,
            may_know: data.may_know,
            reels: data.reels,
            sponsored: data.sponsored,
        }),
    ).then(() => 'done');
}
