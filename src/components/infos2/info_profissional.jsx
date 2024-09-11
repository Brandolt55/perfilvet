

function Formulario() {
  return (
    <div className="container-xl px-4 mt-4">
  <div className="row">
    <div className="col-xl-4">
      {/* Profile picture card */}
      <div className="card mb-4 mb-xl-0">
        <div className="card-header">Editar Perfil</div>
        <div className="card-body text-center">
          {/* Profile picture image */}
          <img
            className="img-account-profile rounded-circle mb-2"
            src="http://bootdey.com/img/Content/avatar/avatar1.png"
            alt=""
          />
          {/* Profile picture help block */}
          <div className="small font-italic text-muted mb-4">
            
          </div>
          {/* Profile picture upload button */}
          <button className="btn btn-primary" type="button">
            Adicionar imagem
          </button>
        </div>
      </div>
    </div>
    <div className="col-xl-8">
      {/* Account details card */}
      <div className="card mb-4">
        <div className="card-header">Informações do perfil</div>
        <div className="card-body">
          <form>
            {/* Form Group (username) */}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputUsername">
                Nome completo
              </label>
              <input
                className="form-control"
                id="inputUsername"
                type="text"
                placeholder="Nome completo"
                defaultValue="Nome completo"
              />
            </div>
            {/* Form Row */}
            <div className="row gx-3 mb-3">
              {/* Form Group (organization name) */}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLastName">
                  Tipo de atendimento
                </label>
                <input
                  className="form-control"
                  id="inputLastName"
                  type="text"
                  placeholder="Enter your last name"
                  defaultValue="Luna"
                />
              </div>
              {/* Form Group (location) */}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLocation">
                  Localização
                </label>
                <input
                  className="form-control"
                  id="inputLocation"
                  type="text"
                  placeholder="Enter your location"
                  defaultValue="San Francisco, CA"
                />
              </div>
            </div>
            {/* Form Group (email address) */}
            {/* Form Row */}
            <div className="row gx-3 mb-3">
              {/* Form Group (phone number) */}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputPhone">
                  Contato
                </label>
                <input
                  className="form-control"
                  id="inputPhone"
                  type="tel"
                  placeholder="Enter your phone number"
                  defaultValue="555-123-4567"
                />
              </div>
              {/* Form Group (birthday) */}
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputBirthday">
                  Especialidades
                </label>
                <input
                  className="form-control"
                  id="inputBirthday"
                  type="text"
                  name="birthday"
                  placeholder="Enter your birthday"
                  defaultValue=""
                />
              </div>
            </div>
            {/* Save changes button */}
            <button className="btn btn-primary" type="button">
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Formulario;