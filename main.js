const { createApp } = Vue

createApp({
    data() {
        return {
            mail: [],
        }
    },
    
    
    mounted() {
        
        for (let index = 0; index < 10; index++) {
            
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                if(resp.data.success){
                    
                    console.log(resp.data.response)
                    
                    this.mail.push (resp.data.response)
                    
                    
                }
                
            })
            
            
            
        }
        
        
    },
    
    
    
    
}).mount('#app')