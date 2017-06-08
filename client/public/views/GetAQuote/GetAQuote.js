import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Utils from '../../utils/Utils';
import css from './GetAQuote.css';
import Dropzone  from '../../external-libraries/dropzonejs/dropzone.js';
import Dropzonebasiccss from '../../external-libraries/dropzonejs/basic.min.css';
import Dropzonecss from '../../external-libraries/dropzonejs/dropzone.min.css';

let html = document.getElementsByTagName( 'html' )[0];
let that;
let myDropzone;
class Services extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    //init of Plugins
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

          customDropzone.processQueue();
        });
      }
    });

    myDropzone.on("complete", function(file) {
      console.log('success: ' + file);
    });

    myDropzone.on("success", function(file) {
      console.log('success: ' + file);
      myDropzone.removeFile(file);
    });

    myDropzone.on("queuecomplete", function () {
        this.removeAllFiles();
    });

    myDropzone.on("sending", function(file, xhr, formData) {
      // Will send the filesize along with the file as POST data.
      var name = "files";
      formData.append(name, file);
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
                          <input className="input is-hovered" type="text" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label">E-Mail: </label>
                        <p className="control">
                          <input className="input" type="text" />
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
                            <select>
                              <option>Web App</option>
                              <option>Mobile App</option>
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
                            <select>
                              <option>€ 1000 - 1500</option>
                              <option>€ 1500 - 2000</option>
                              <option>€ 2000 - 2500</option>
                              <option>€ 3000 - 5000</option>
                              <option>€ 5000+ </option>
                              <option>€ 10000+ </option>
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
                          <textarea className="textarea"></textarea>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <div className="field is-horizontal">
                        <div className="field-body">
                          <div className="field">
                            <div className="control">
                              <button type="submit" className="item button is-danger is-inverted is-outlined" id="sendQuote">
                                Get a Quote
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column">
                  <div className="columns">
                    <div className="column">
                      <label className="label">Any project file ?:</label>
                      <div className="dropzone" id="dropzone">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
