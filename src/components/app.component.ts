import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

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
  sm: number = 4;
  @property()
  wf: number = 4;
  @property()
  overall: number = 85;
  @property()
  playerName: string = 'Bongarts';
  @property()
  playerImgUrl: string = 'https://cdn.fupa.net/player/jpeg/512x640/I4W29kv1JOpnbV9Hm6DkoywPTtK8x5RbIQ2qjYC6';
  @property()
  clubLogoUrl: string = 'https://cdn.fupa.net/club/png/50x50/th7P2b155brFxjMRmYOHG5G6VB27U02fIeFR5xM1';
  @property()
  nationLogoUrl: string = 'https://futhead.cursecdn.com/static/img/19/nations/21.png';
  @property()
  position: string = 'ST';
  @queryAll('.codeInput')
  codeInputElements!: NodeListOf<HTMLInputElement>;

  @query('#pac')
  pacElement!: HTMLInputElement;
  @query('#sho')
  shoElement!: HTMLInputElement;
  @query('#pas')
  pasElement!: HTMLInputElement;
  @query('#dri')
  driElement!: HTMLInputElement;
  @query('#def')
  defElement!: HTMLInputElement;
  @query('#phy')
  phyElement!: HTMLInputElement;
  @query('#playerName')
  playerNameElement!: HTMLInputElement;
  @query('#playerImgUrl')
  playerImgUrlElement!: HTMLInputElement;
  @query('#clubLogoUrl')
  clubLogoUrlElement!: HTMLInputElement;
  @query('#nationLogoUrl')
  nationLogoUrlElement!: HTMLInputElement;
  @query('#position')
  positionElement!: HTMLInputElement;
  @query('#sm')
  smElement!: HTMLInputElement;
  @query('#wf')
  wfElement!: HTMLInputElement;


  firstUpdated() {
    this.codeInputElements.forEach((e: HTMLInputElement) => {
      this.resizeInputs(e);
      e.addEventListener('keyup', (event) => {
        this.resizeInputs(e);
        this.updateData();
      });
    });
  }

  updateData() {
    this.pac = Number(this.pacElement.value);
    this.sho = Number(this.shoElement.value);
    this.pas = Number(this.pasElement.value);
    this.dri = Number(this.driElement.value);
    this.def = Number(this.defElement.value);
    this.phy = Number(this.phyElement.value);
    this.playerImgUrl = this.playerImgUrlElement.value;
    this.playerName = this.playerNameElement.value;
    this.clubLogoUrl = this.clubLogoUrlElement.value;
    this.nationLogoUrl = this.nationLogoUrlElement.value;
    this.position = this.positionElement.value;
    Number(this.smElement.value) < 6 ? this.sm = Number(this.smElement.value) : this.smElement.value = '0';
    Number(this.wfElement.value) < 6 ? this.wf = Number(this.wfElement.value) : this.wfElement.value = '0';
  }

  resizeInputs(e: HTMLInputElement) {
    if (e.value.length > 2) e.style.width = ((e.value.length) / 2 + 1) + 'em';
    if (e.value.length <= 2) e.style.width = '1.5em';
    if (e.value.length === 0) e.style.width = ((e.name.length) / 2 + 1) + 'em';
    if (e.value.length === 1) e.style.width = '1em';
  }

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
          <span class="attribute"> playerName=<span class="attributeName">"</span><input type="text" maxlength="12" class="codeInput"
              placeholder="playerName" id="playerName" name="playerName" value=${this.playerName}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> playerImgUrl=<span class="attributeName">"</span><input type="text" class="codeInput"
              placeholder="Insert URL" id="playerImgUrl" name="clubLogoUrl" value=${this.playerImgUrl}><span class="attributeName">"</span></span>
          </span>
          <br>
          <span class="attribute"> clubLogoUrl=<span class="attributeName">"</span><input type="text" class="codeInput"
              placeholder="Insert URL" id="clubLogoUrl" name="clubLogoUrl" value=${this.clubLogoUrl}><span class="attributeName">"</span></span>
          </span>
          <br>
          <span class="attribute"> nationLogoUrl=<span class="attributeName">"</span><input type="text" class="codeInput"
              placeholder="Insert URL" id="nationLogoUrl" name="clubLogoUrl" value=${this.nationLogoUrl}><span class="attributeName">"</span></span>
          </span>
          <br>
          <span class="attribute"> pac=<span class="attributeName">"</span><input maxlength="2" type="text" max="99" class="codeInput"
              placeholder="PAC" id="pac" name="pac" value=${this.pac}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> sho=<span class="attributeName">"</span><input maxlength="2" type=" text" max="99" class="codeInput"
              placeholder="sho" id="sho" name="sho" value=${this.sho}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> pas=<span class="attributeName">"</span><input maxlength="2" type=" text" max="99" class="codeInput"
              placeholder="pas" id="pas" name="pas" value=${this.pas}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> dri=<span class="attributeName">"</span><input maxlength="2" type=" text" max="99" class="codeInput"
              placeholder="dri" id="dri" name="dri" value=${this.dri}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> def=<span class="attributeName">"</span><input maxlength="2" type=" text" max="99" class="codeInput"
              placeholder="def" id="def" name="def" value=${this.def}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> phy=<span class="attributeName">"</span><input maxlength="2" type=" text" max="99" class="codeInput"
              placeholder="PHY" id="phy" name="phy" value=${this.phy}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> overall=<span class="attributeName">"</span><input maxlength="2" type=" text" max="99"
              class="codeInput" placeholder="overall" id="pac" name="pac" value=${this.overall}><span class="attributeName">"</span></span>
          <br>
          <span class="attribute"> position=<span class="attributeName">"</span><input type="text" max="99" class="codeInput"
              placeholder="position" id="position" name="position" value=${this.position}><span class="attributeName">"</span></span>
          </span>
          <br>
          <span class="attribute"> sm=<span class="attributeName">"</span><input type="text" maxlength="1" class="codeInput"
              placeholder="sm" id="sm" name="sm" value=${this.sm}><span class="attributeName">"</span></span>
          </span>
          <br>
          <span class="attribute"> wf=<span class="attributeName">"</span><input type="text" maxlengt="1" class="codeInput"
              placeholder="wf" id="wf" name="wf" value=${this.wf}><span class="attributeName">"</span></span>
          </span>
          <br>
          <span class="tag">&lt/marius-fifa-card/></span>
        </div>
        <div class="col-12 col-lg-6 align-self-center">
          <marius-fifa-card playerName=${this.playerName} pac=${this.pac} sho=${this.sho} pas=${this.pas} dri=${this.dri}
            def=${this.def} phy=${this.phy} overall=${this.overall} position=${this.position} playerImgUrl=${this.playerImgUrl}
            nationLogoUrl=${this.nationLogoUrl} clubLogoUrl=${this.clubLogoUrl} sm=${this.sm} wf=${this.wf}>
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
        <div class="col-12 col-lg-6 align-self-center" style="left: 20%">
          <marius-button class="align-self-center"></marius-button>
        </div>
      </div>

      <!-- marius-navbar -->
      <div class="row my-2 pt-5 d-flex justify-content-center">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-button"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-navbar</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-navbar/></span>
        </div>
        <div class="col-12 col-lg-6 align-self-center" style="left: 20%">
          <marius-navbar class="align-self-center"></marius-navbar>
        </div>
      </div>

      <!-- marius-navbar adjusted css -->
      <div class="row my-2 pt-5 d-flex justify-content-center">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-button"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-navbar</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-navbar/></span>
        </div>
        <div class="col-12 col-lg-6 align-self-center" style="left: 20%">
          <marius-navbar class="align-self-center secondNavbar"></marius-navbar>
        </div>
      </div>

      <!-- marius-navbar adjusted css -->
      <div class="row my-2 pt-5 d-flex justify-content-center">
        <div class="col-12 col-lg-6 componentInfo">
          <span class="comment">&lt!-- See it on <a class="comment" target="_blank" href="https://github.com/marius2502/marius-button"
              class="attributeName">Github</a> --></span>
          <br>
          <span class="tag">&ltmarius-navbar</span>
          <br>
          <span class="tag">></span></a>
          </span>
          <br>
          <span class="tag">&lt/marius-navbar/></span>
        </div>
        <div class="col-12 col-lg-6 align-self-center" style="left: 20%">
          <marius-navbar class="align-self-center thirdNavbar"></marius-navbar>
        </div>
      </div>

    </div>
`;
  }

}
