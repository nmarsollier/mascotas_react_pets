function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mascotas_react_common = require('mascotas_react_common');
var React = require('react');
var React__default = _interopDefault(React);
var axios = _interopDefault(require('axios'));

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var deletePet = function deletePet(id) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios["delete"](mascotas_react_common.environment.backendUrl + "/v1/pet/" + id)).then(function () {
        return Promise.resolve();
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var savePet = function savePet(payload) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios.post(mascotas_react_common.environment.backendUrl + "/v1/pet/" + payload.id, payload)).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var newPet = function newPet(payload) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios.post(mascotas_react_common.environment.backendUrl + "/v1/pet", payload)).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var loadPet = function loadPet(id) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios.get(mascotas_react_common.environment.backendUrl + "/v1/pet/" + id)).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var loadPets = function loadPets() {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios.get(mascotas_react_common.environment.backendUrl + "/v1/pet")).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
axios.defaults.headers.common["Content-Type"] = "application/json";

function NewPet(props) {
  var _useState = React.useState(""),
      birthDate = _useState[0],
      setBirthDate = _useState[1];

  var _useState2 = React.useState(""),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = React.useState(""),
      petId = _useState3[0],
      setPetId = _useState3[1];

  var _useState4 = React.useState(""),
      name = _useState4[0],
      setName = _useState4[1];

  var errorHandler = mascotas_react_common.useErrorHandler();

  var loadPetById = function loadPetById(id) {
    try {
      var _temp3 = function () {
        if (id) {
          var _temp4 = _catch(function () {
            return Promise.resolve(loadPet(id)).then(function (result) {
              setBirthDate(result.birthDate);
              setPetId(result.id);
              setName(result.name);
              setDescription(result.description);
            });
          }, function (error) {
            errorHandler.processRestValidations(error);
          });

          if (_temp4 && _temp4.then) return _temp4.then(function () {});
        }
      }();

      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var deleteClick = function deleteClick() {
    try {
      var _temp7 = function () {
        if (petId) {
          var _temp8 = _catch(function () {
            return Promise.resolve(deletePet(petId)).then(function () {
              props.history.push("/pets");
            });
          }, function (error) {
            errorHandler.processRestValidations(error);
          });

          if (_temp8 && _temp8.then) return _temp8.then(function () {});
        }
      }();

      return Promise.resolve(_temp7 && _temp7.then ? _temp7.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var saveClick = function saveClick() {
    try {
      errorHandler.cleanRestValidations();

      if (!name) {
        errorHandler.addError("name", "No puede estar vacío");
      }

      if (errorHandler.hasErrors()) {
        return Promise.resolve();
      }

      var _temp12 = _catch(function () {
        function _temp10() {
          props.history.push("/pets");
        }

        var _temp9 = function () {
          if (petId) {
            return Promise.resolve(savePet({
              id: petId,
              name: name,
              birthDate: birthDate,
              description: description
            })).then(function () {});
          } else {
            return Promise.resolve(newPet({
              id: petId,
              name: name,
              birthDate: birthDate,
              description: description
            })).then(function () {});
          }
        }();

        return _temp9 && _temp9.then ? _temp9.then(_temp10) : _temp10(_temp9);
      }, function (error) {
        errorHandler.processRestValidations(error);
      });

      return Promise.resolve(_temp12 && _temp12.then ? _temp12.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  React.useEffect(function () {
    var id = props.match.params.id;

    if (id) {
      loadPetById(id);
    }
  }, []);
  return /*#__PURE__*/React__default.createElement(mascotas_react_common.GlobalContent, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormTitle, null, "Nueva Mascota"), /*#__PURE__*/React__default.createElement(mascotas_react_common.Form, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormInput, {
    label: "Nombre",
    name: "name",
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormInput, {
    label: "Descripci\xF3n",
    name: "description",
    value: description,
    onChange: function onChange(event) {
      return setDescription(event.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormInput, {
    label: "Fecha de Nacimiento",
    name: "birthDate",
    value: birthDate,
    onChange: function onChange(event) {
      return setBirthDate(event.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.DangerLabel, {
    message: errorHandler.errorMessage
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormButtonBar, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormAcceptButton, {
    label: "Guardar",
    onClick: saveClick
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormWarnButton, {
    hidden: !petId,
    label: "Eliminar",
    onClick: deleteClick
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormButton, {
    label: "Cancelar",
    onClick: function onClick() {
      return mascotas_react_common.goHome(props);
    }
  }))));
}

function Pets(props) {
  var _useState = React.useState(new Array()),
      pets = _useState[0],
      setPets = _useState[1];

  var errorHandler = mascotas_react_common.useErrorHandler();

  var loadCurrentPets = function loadCurrentPets() {
    try {
      var _temp2 = _catch(function () {
        return Promise.resolve(loadPets()).then(function (result) {
          setPets(result);
        });
      }, function (error) {
        errorHandler.processRestValidations(error);
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var editPetClick = function editPetClick(petId) {
    props.history.push("/editPet/" + petId);
  };

  var newPetClick = function newPetClick() {
    props.history.push("/editPet");
  };

  React.useEffect(function () {
    loadCurrentPets();
  }, []);
  return /*#__PURE__*/React__default.createElement(mascotas_react_common.GlobalContent, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormTitle, null, "Mascotas"), /*#__PURE__*/React__default.createElement("table", {
    id: "mascotas",
    className: "table"
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, /*#__PURE__*/React__default.createElement("th", null, " Nombre "), /*#__PURE__*/React__default.createElement("th", null, " Descripci\xF3n "), /*#__PURE__*/React__default.createElement("th", null, " "))), /*#__PURE__*/React__default.createElement("tbody", null, pets.map(function (pet, i) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: i
    }, /*#__PURE__*/React__default.createElement("td", null, pet.name), /*#__PURE__*/React__default.createElement("td", null, pet.description), /*#__PURE__*/React__default.createElement("td", {
      className: "text"
    }, /*#__PURE__*/React__default.createElement("img", {
      src: "/assets/edit.png",
      alt: "",
      onClick: function onClick() {
        return editPetClick(pet.id);
      }
    })));
  }))), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormButtonBar, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormAcceptButton, {
    label: "Nueva Mascota",
    onClick: newPetClick
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormButton, {
    label: "Cancelar",
    onClick: function onClick() {
      return mascotas_react_common.goHome(props);
    }
  })));
}

exports.NewPet = NewPet;
exports.Pets = Pets;
//# sourceMappingURL=index.js.map
