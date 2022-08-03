async componentDiMount() {
    const url = " https://data-sprint-02.herokuapp.com/user"
    const resp = await fetch(url)
    const data = await resp.json
    console.log(data.results)

    };



    
this.handleChangeName = this.handleChangeName.bind(this);
this.handleChangeEmail = this.handleChangeEmail.bind(this);
this.handleChangeTelefono = this.handleChangeTelefono.bind(this);
this.handleChangeContraseña = this.handleChangeContraseña.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

