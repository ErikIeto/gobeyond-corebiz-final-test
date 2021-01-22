import React from "react";
import "../form/form.css";

export default () => {
  return (
    <div className="form-total-area">
      <div className="form-area">
        <h2>Participe de nossas news com promoções e novidades!</h2>

        <form id="form" name="" method="" action="" class="newsletters">
          <label>
            <input className="input" placeholder="Digite seu nome" />
          </label>

          <label>
            <input className="input" placeholder="Digite seu e-mail" />
          </label>

          <label className="button">
            <button className="news" type="submit">
              Eu quero!
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};
