class Aut{
    name:string;
    email:string;
    id:string;
    token:string;
    srv:string;
    refreshToken:string;
    avatara:string;
    
    constructor(srv:string='') {
       this.name='';
       this.email='';
       this.id='';
       this.token='';
       this.refreshToken='';
       this.avatara = '';
       this.srv=srv;
       this.loadUser();
       if (srv!='') this.srv=srv;
     }

    loadImg(file:File, elem?: HTMLElement) {
      if (!file.type.startsWith('image/')){ console.log('This is not image!'); return } 
      const reader = new FileReader();
      reader.onload =((e)=> {
        console.log('Image added');
        if (e.target) {
          this.avatara =  e.target.result as string;
          this.savUser();
          if (elem) this.viewAva(elem);
        }
      });
      reader.readAsDataURL(file);
    }

    async addUser(email:string, password:string, name:string) {
       const usr= (this.avatara!='' ) ?{name:name, email:email, password:password,img_buf:this.avatara }
                                    :{name:name, email:email, password:password};
       fetch(this.srv+'/users', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(usr)
     })
      .then(async res => {
          if (res.ok){
          const data=  await res.json()
          this.id=data.id;
          this.email=email;
          this.name=name;
          console.log('User added ', data.id)
          this.SignIn(email,password)
          } else console.log('Users ERROR') 
          
      })
      .catch(() => console.log('ERROR adding user'))
    }

    viewAva(elem: HTMLElement){
      const img = document.createElement("img") as HTMLImageElement;
      img.classList.add("obj");
      //img.width=100
      elem.innerHTML='';
      elem.appendChild(img);
      img.setAttribute('src', this.avatara);
    }

    viewUser(){
      document.getElementById("usrname")!.querySelector('input')!.value=this.name ; 
      document.getElementById("usremail")!.querySelector('input')!.value=this.email  ;   
      document.getElementById("usrpassword")!.querySelector('input')!.value=''  ;   
      const imgAva = document.getElementById('usrimage') as HTMLElement
      this.viewAva(imgAva) 
    }

    async SignIn(email:string, password:string){
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
       
        console.log('User autorization is successful')
        this.savUser();
        this.getUser();

        
    })
    .catch(() => console.log('ERROR authorization'))
  }

  async getUser(){
    fetch(this.srv+'/users/'+this.id, {
   method: 'GET',
   //credentials: 'include',
   headers: {
     'Authorization': `Bearer ${this.token}`,
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
  
 })
  .then(async  res => {
      const data=  await res.json()
      this.name=data.name;
      if (data.img_buf) this.avatara=data.img_buf;
      this.savUser();
      this.viewUser()
      
  })
  .catch(res => console.log('ERROR get user',res))
}

  addListener()
  {
    const usradd = document.getElementById("usradd") as HTMLInputElement;
    usradd.addEventListener("click", ()=>{
     const usrname = document.getElementById("usrname")!.querySelector('input')!.value ; 
     const usremail = document.getElementById("usremail")!.querySelector('input')!.value  ;   
     const usrpass = document.getElementById("usrpassword")!.querySelector('input')!.value  ;   
     this.addUser(usremail,usrpass,usrname)
     });
    
     const usrsignin = document.getElementById("usrsignin") as HTMLInputElement;
     usrsignin.addEventListener("click", ()=>{
      const usremail = document.getElementById("usremail")!.querySelector('input')!.value  ;   
      const usrpass = document.getElementById("usrpassword")!.querySelector('input')!.value  ;   
      this.SignIn(usremail, usrpass)
      });

      const usrsignout = document.getElementById("usrsignout") as HTMLInputElement;
      usrsignout.addEventListener("click", ()=>{
        this.SignOut()
       });
 

    const dropbox = document.getElementById('usrimagedropbox') as HTMLInputElement;
    dropbox.addEventListener("dragenter", (e)=>{e.stopPropagation();e.preventDefault()}, false);
    dropbox.addEventListener("dragover", (e)=>{e.stopPropagation();e.preventDefault()}, false);
    dropbox.addEventListener("drop", (e)=>{
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer && e.dataTransfer.files) {
        const preview = document.getElementById('usrimagedropbox') as HTMLElement
        this.loadImg(e.dataTransfer.files[0],preview);
      }
    }, false);
  }
  loadUser(){
   if (localStorage.getItem('autority')!==null) {
     const load=JSON.parse(localStorage.getItem('autority') as string);
     Object.assign(this,load);
     //if (this.refreshToken !='') this.newToken();
    }
  }

  savUser()
  {
    localStorage.setItem('autority', JSON.stringify(this));
  }

  newToken(){
    fetch(this.srv+'/users/'+this.id+'/tokens', {
      method: 'GET',
      //withCredentials: true ,
      headers: {
        'Authorization': `Bearer ${this.refreshToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
     .then(async  res => {
         const data=  await res.json()
         this.token=data.token;
         this.refreshToken=data.refreshToken;
         console.log('New token generated ')
         this.savUser();
     })
     .catch(()=> {console.log('ERROR renew token'); this.SignOut()}) 
  }
  SignOut()
  {  localStorage.removeItem('autority')
     this.id='';
     this.token='';
     this.refreshToken='';
     this.email='';
     this.name='';
     this.avatara='';
     this.viewUser();
     console.log('Sign Out')
  }
}

export default Aut;