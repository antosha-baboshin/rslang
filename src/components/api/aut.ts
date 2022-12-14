const MAIN_URL=`../index.html`
class Aut {
    name:string;
    email:string;
    id:string;
    token:string;
    refreshToken:string;
    avatara:string;
    
    constructor() {
       this.name='';
       this.email='';
       this.id='';
       this.token='';
       this.refreshToken='';
       this.avatara = '';
       this.loadUser();
     }

    loadImg(file:File, elem?: HTMLElement) {
      if (!file.type.startsWith('image/')){ alert("This is not image!"); return } 
      const reader = new FileReader();
      reader.onload =((e)=> {
        if (e.target) {
          this.avatara =  e.target.result as string;
          this.savUser();
          const imgAva = document.getElementById('usrimage') as HTMLInputElement
          imgAva.src=this.avatara
          //if (elem) this.viewAva(elem);
        }
      });
      reader.readAsDataURL(file);
    }

    async addUser(email:string, password:string, name:string,url?:string) {
       const usr= (this.avatara!='' ) ?{name:name, email:email, password:password,img_buf:this.avatara }
                                    :{name:name, email:email, password:password};
       fetch(process.env.SERVER+'/users', {
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
          console.log('User added', data.id)
          this.SignIn(email, password,url)
          } else alert("Users ERROR") 
      })
      .catch(() => console.log('ERROR adding user'))
    }

    viewAva(elem: HTMLElement){
      const img = document.createElement("img") as HTMLImageElement;
      img.classList.add("obj");
      elem.innerHTML='';
      elem.appendChild(img);
      img.setAttribute('src', this.avatara);
    }

    viewUser(defimg?:string){
      document.getElementById("usrname")!.querySelector('input')!.value=this.name ; 
      document.getElementById("usremail")!.querySelector('input')!.value=this.email  ;   
      document.getElementById("usrpassword")!.querySelector('input')!.value=''  ;   
      const imgAva = document.getElementById('usrimage') as HTMLInputElement
      if (this.avatara!='')  {imgAva.src=this.avatara}
       else  {if (defimg) {imgAva.src=defimg} else imgAva.src=''}
        //this.viewAva(imgAva) 
    }

    async SignIn(email:string, password:string,url?:string){
      fetch(process.env.SERVER+'/signin', {
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
        if (url && url!='') window.location.href=url; 
    })
    .catch(() => alert("ERROR authorization"))
  }

  async getUser(){
    fetch(process.env.SERVER+'/users/'+this.id, {
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
      if (data.img_buf!='') this.avatara=data.img_buf;
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
        this.viewUser('../assets/img/dravava.jpg');
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
    if (this.id!=''){
    fetch(process.env.SERVER+'/users/'+this.id+'/tokens', {
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
         console.log('New token generated. ID: ',this.id,'  token:',this.token)
         this.savUser();
     })
     .catch(()=> {console.log('ERROR renew token'); this.SignOut()}) 
    }
  }
  
  SignOut()
  {  localStorage.removeItem('autority')
     this.id='';
     this.token='';
     this.refreshToken='';
     this.email='';
     this.name='';
     this.avatara='';
     console.log('Sign Out')
  }
}

export default Aut;