import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Utils from '../../utils/Utils';
import css from './GetAQuote.css';
import Dropzone  from '../../external-libraries/dropzonejs/dropzone.min.js';
import Dropzonebasiccss from '../../external-libraries/dropzonejs/basic.min.css';
import Dropzonecss from '../../external-libraries/dropzonejs/dropzone.min.css';
import update from 'immutability-helper';
import axios from 'axios';

let html = document.getElementsByTagName( 'html' )[0];
let that;
let myDropzone;
class Services extends Component {

  constructor(props){
    super(props);
    this.state = {
      formInputs: {
        NameSurname: '',
        Email: '',
        AppType: 'Web App',
        Budget: '€ 1000 - 1500',
        Description: '',
        Company: '',
        Phone: '',
        buttonEnabled: false
      }
    }
    this.defaultState = this.state.formInputs;
  }

  formIsValid() {
    if (this.state.formInputs.NameSurname != ''
        && this.state.formInputs.Email != ''
        && this.state.formInputs.Description != ''
        ) {
      return true;
    }
    else {
      return false;
    }
  }

  changeInputValue (field, name, e) {
    new Promise ((resolve, reject) => {
      resolve(
        this.setState(
          update(this.state,
            {formInputs:
              {
                [name]: {$set: e.target.value}
              }
            })
        )
      )
    }).then((resolve) => {
      if (this.formIsValid()) {
        // this.state.formInputs.buttonEnabled = true
        this.setState(
          update(this.state,
            {formInputs:
              {
                buttonEnabled: {$set: true}
              }
            })
        )
      };
    });
  }

  componentDidMount() {
    //init of Plugins
    window.scrollTo(0, 0);
    Utils.registerPlugins();
    that = this;
    Dropzone.autoDiscover = false;

    var myDropzone = new Dropzone(
      "div#dropzone", {
      url: "/api/quotes",
      autoProcessQueue: false,
      addRemoveLinks: true,
      uploadMultiple: true,
      paramName: "file",
      parallelUploads: 5,
      init: function () {
        var customDropzone = this;
        document.getElementById('sendQuote').addEventListener("click", function(e) {
          // Make sure that the form isn't actually being sent.
          e.preventDefault();
          e.stopPropagation();
          console.log(myDropzone.getQueuedFiles());
          if (myDropzone.getQueuedFiles().length > 0) {
            customDropzone.processQueue();
          } else {
            console.log(that.state.formInputs);
              // customDropzone.uploadFiles([{formInputs: that.state.formInputs}]); //send empty
              axios.post('/api/quotes', that.state.formInputs)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        });
      }
    });

    myDropzone.on("sendingmultiple", function(file, xhr, formData) {
      // Will send the filesize along with the file as POST data.
      _.forEach(that.state.formInputs, function(value, key) {
        console.log(value, key);
        formData.append(key, value);
      });
    });

    myDropzone.on("completemultiple", function (success, error) {
      if (error) {
        alert('couldnt upload: ' + error);
      }
      else {
        setTimeout(function(){
          myDropzone.removeAllFiles();
        }, 3500);
        console.log('successful upload: ' + success);
        that.setState({formInputs: that.defaultState});
        console.log('state: ' + JSON.stringify(that.state.formInputs));
      }
    });

    myDropzone.on("error", function(error, errorMessage) {
      console.log(error, errorMessage);
    });

  }

  render(){
    return (
      <div>
        <section className="hero is-medium is-primary GetAQuoteHeading">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                GET A QUOTE
              </h1>
              <h2 className="subtitle">
                Fill the form explaining your project
              </h2>
            </div>
          </div>
        </section>

        <section className="hero trasparent is-medium is-fullheight GetAQuote" id="particles-js">
          {/* HERO */}
          <div className="hero-body">
            {/* HERO CONTAINER  */}
            <div className="container main_container">
              <form>
              <div className="columns">
                <div className="column is-one-third">
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Name & Lastname: </label>
                        <p className="control">
                          <input value={this.state.formInputs.NameSurname} onChange={e => this.changeInputValue(this, 'NameSurname', e)} className="input is-hovered" type="text" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">E-Mail: </label>
                        <p className="control">
                          <input type="email" value={this.state.formInputs.Email} onChange={e => this.changeInputValue(this, 'Email', e)} className="input" type="text" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Application type: </label>
                        <p className="control">
                          <span className="select">
                            <select onChange={e => this.changeInputValue(this, 'AppType', e)}>
                              <option defaultValue="Web App">Web App</option>
                              <option value="Mobile App">Mobile App</option>
                            </select>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">Budget: </label>
                        <p className="control">
                          <span className="select">
                            <select onChange={e => this.changeInputValue(this, 'Budget', e)}>
                              <option defaultValue="€ 1000 - 1500">€ 1000 - 1500</option>
                              <option value="€ 1500 - 2000">€ 1500 - 2000</option>
                              <option value="€ 2000 - 2500">€ 2000 - 2500</option>
                              <option value="€ 3000 - 5000">€ 3000 - 5000</option>
                              <option value="€ 5000+ ">€ 5000+ </option>
                              <option value="€ 10000+ ">€ 10000+ </option>
                            </select>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Describe your project: </label>
                        <p className="control">
                          <textarea value={this.state.formInputs.Description} onChange={e => this.changeInputValue(this, 'Description', e)} className="textarea"></textarea>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column">
                <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">Company: </label>
                        <p className="control">
                          <input type="text" value={this.state.formInputs.Company} onChange={e => this.changeInputValue(this, 'Company', e)} className="input" type="text" />
                        </p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field">
                        <label className="label">Phone: </label>
                        <p className="control">
                          <input type="tel" value={this.state.formInputs.Phone} onChange={e => this.changeInputValue(this, 'Phone', e)} className="input" type="text" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <label className="label">Any project file ?</label>
                      <div className="dropzone" id="dropzone">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
              <div className="columns">
                <div className="column">
                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <button disabled={this.state.formInputs.buttonEnabled === false} className="item button is-danger is-inverted is-outlined is-medium" id="sendQuote">
                            Get a Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
