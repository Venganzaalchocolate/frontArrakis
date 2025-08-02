import '../styles/login.css';



export default function LoginRetro(){
  return (
    <div className="crt-wrap">
      <div className="crt-frame" role="region" aria-label="Panel de acceso">
        <div className="crt-title">ARRAKIS // LOGIN</div>

        <form className="crt-form" onSubmit={e => e.preventDefault()}>
          <div className="field">
            <label htmlFor="email">EMAIL</label>
            <input id="email" type="email" placeholder="tu@email.com"
                   autoComplete="email" inputMode="email" />
          </div>

          <div className="field">
            <label htmlFor="password">CONTRASEÑA</label>
            <input id="password" type="password" placeholder="••••••••"
                   autoComplete="current-password" />
          </div>

          {/* Botón global con helper block */}
          <button className="btn btn--block crt-btn" type="submit">ENTRAR</button>
        </form>

        <div className="crt-footer">© CASA ARRAKIS SYS · v0.1</div>
        <div className="crt-scanlines" aria-hidden />
      </div>
    </div>
  );
}
