class Aut {
    name:string;
    email:string;
    id:string;
    token:string;
    srv:string;
    refreshToken:string;
    
    constructor(srv: string) {
       this.name='';
       this.email='';
       this.id='';
       this.token='';
       this.refreshToken='';
       this.loadUser();
       this.srv=srv;
    }

    async addUser(email:string,password:string,name:string){
        fetch(this.srv+'/users', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({name:name, email:email, password:password})
     })
      .then(async  res => {
          
          const data=  await res.json()
          this.id=data.id;
          this.email=email;
          this.name=name;
          console.log('User added ',this.id, ' ', this.email,' ' ,this.name)
          this.SingIn(email,password)
      })
      .catch(res => console.log('ERROR adding user',res))
    }

    async SingIn(email:string,password:string){
      fetch(this.srv+'/signin', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({email:email, password:password})
   })
    .then(async  res => {
        const data=  await res.json()
        this.id=data.userId;
        this.token=data.token;
        this.refreshToken=data.refreshToken;
        this.email=email;
        this.name=data.name;
        console.log('User autorisation ',this.id, ' ', this.email,' ' ,this.name)
        this.savUser();
    })
    .catch(res => console.log('ERROR autorization',res))
  }

  async getUser(){
    fetch(this.srv+'/users/'+this.id, {
   method: 'GET',
    headers: {
     'Authorization': `Bearer ${this.token}`,
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
  
 })
  .then(async  res => {
      const data=  await res.json()
      console.log('Get user ',data)
      
  })
  .catch(res => console.log('ERROR get user',res))
}

  loadUser(){
   if (localStorage.getItem('autority')!==null) {
     const load=JSON.parse(localStorage.getItem('autority') as string);
     Object.assign(this,load);
    }
  }

  savUser()
  {
    localStorage.setItem('autority', JSON.stringify(this));
  }

  newToken(){
    fetch(this.srv+'/users/'+this.id+'/tokens', {
      method: 'POST',
      //withCredentials: true ,
      headers: {
        'Authorization': `Bearer ${this.refreshToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
     .then(async  res => {
         const data=  await res.json()
         this.id=data.userId;
         this.token=data.token;
         this.refreshToken=data.refreshToken;
         console.log('New token ',this.id, ' ', this.email,' ' ,this.name)
         this.savUser();
     })
     .catch(res => console.log('ERROR renew token',res)) 
  }
  SingnOut()
  {  localStorage.removeItem('autority')
     this.id='';
     this.token='';
     this.refreshToken='';
     this.email='';
     this.name='';
  }

  print()
  {
    console.log('aut: ',this)
  }
}

export default Aut;