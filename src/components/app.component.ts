import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  pac: number = 93;
  @property()
  sho: number = 85;
  @property()
  pas: number = 80;
  @property()
  dri: number = 85;
  @property()
  def: number = 67;
  @property()
  phy: number = 69;
  @property()
  overall: number = 85;
  @property()
  playerName: string = 'Bongarts';
  @property()
  playerImgUrl: string = 'https://cdn.fupa.net/player/jpeg/256x320/iVAUsxKAm4fCgRD0ldjSZ9M0MX7eYBnmZtoJKNLy';
  @property()
  clubLogoUrl: string = 'https://cdn.fupa.net/club/png/50x50/th7P2b155brFxjMRmYOHG5G6VB27U02fIeFR5xM1';
  @property()
  nationLogoUrl: string = 'https://futhead.cursecdn.com/static/img/19/nations/21.png';
  @property()
  position: string = 'ST';

  render() {
    return html`
    <div class="container pt-5">
      <!-- marius-fifa-card -->
      <div class="row my-2 pt-5 d-flex justify-content-center">
        <div class="col-12 col-lg-6  componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-fifa-card"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-fifa-card</span>
          <br>
          <span class="attribute"> playerName=</span><span class="attributeName">"Bongarts"</span>
          <span class="attribute"> playerImgUrl=</span><span class="attributeName">"https://cdn.fupa.net/player/jpeg/512x640/I4W29kv1JOpnbV9Hm6DkoywPTtK8x5RbIQ2qjYC6"</span>
          <span class="attribute"> clubImgUrl=</span><span class="attributeName">"https://cdn.fupa.net/club/png/50x50/th7P2b155brFxjMRmYOHG5G6VB27U02fIeFR5xM1"</a>
            <span class="attribute"> nationImgUrl=</span><span class="attributeName">"https://futhead.cursecdn.com/static/img/19/nations/21.png"</a>
              <br>
              <span class="attribute"> pac=</span><span class="attributeName">"${this.pac}"</a>
                <br>
                <span class="attribute"> sho=</span><span class="attributeName">"${this.sho}"</a>
                  <br>
                  <span class="attribute"> pas=</span><span class="attributeName">"${this.pas}"</a>
                    <br>
                    <span class="attribute"> dri=</span><span class="attributeName">"${this.dri}"</a>
                      <br>
                      <span class="attribute"> def=</span><span class="attributeName">"${this.def}"</a>
                        <br>
                        <span class="attribute"> phy=</span><span class="attributeName">"${this.phy}"</a>
                          <br>
                          <span class="attribute"> overall=</span><span class="attributeName">"${this.overall}"</a>
                            <br>
                            <span class="attribute"> position=</span><span class="attributeName">"LF"<span class="tag">></span></a>
                            </span>
                            <br>
                            <span class="tag">&lt/marius-fifa-card/></span>
        </div>
        <div class="col-12 col-lg-6 align-self-center">
          <marius-fifa-card playerName="Bongarts" pac=93 sho=87 pas=80 dri=85 def=67 phy=69 overall=85 position='LF'
            playerImgUrl="https://cdn.fupa.net/player/jpeg/512x640/I4W29kv1JOpnbV9Hm6DkoywPTtK8x5RbIQ2qjYC6">
          </marius-fifa-card>
        </div>
      </div>

      <!-- marius-button -->
      <div class="row my-2 pt-5 d-flex justify-content-center">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-button"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-button</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-button/></span>
        </div>
        <div class="col-12 col-lg-6">
          <marius-button class="align-self-center"></marius-button>
        </div>
      </div>

    </div>
`;
  }

}
