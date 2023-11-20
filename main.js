const { createApp } = Vue

createApp({
    data() {
        return {
            
            mail: "",



        }
    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
           
            if(resp.data.success){
                
            console.log(resp.data.response)
            this.mail = resp.data.response

        
        }
        
        });


    }




}).mount('#app')