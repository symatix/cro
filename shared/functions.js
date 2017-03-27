Meteor.myFunctions = {
  dateFormat:function(){
    Date.prototype.getHoursCustom = function(){
      var retval = this.getHours();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    Date.prototype.getMinutesCustom = function(){
      var retval = this.getMinutes();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    Date.prototype.getSecondsTwoCustom = function(){
      var retval = this.getSeconds();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    var date = new Date();
    var dateFormat = (date.getMonth() + 1) + '.' + date.getDate() + '.' +  date.getFullYear() + '. '+date.getHoursCustom() + ':' + date.getMinutesCustom() + ':' + date.getSecondsTwoCustom();
    return dateFormat;
  },
clearIndividualValues: function(){
    event.target.author.value = '';
    event.target.title.value = '';
    event.target.date.value = '';
    event.target.period_style.value = '';
    event.target.collection_owner.value = '';
    event.target.museum_gallery.value = '';
    event.target.painting_technique.value = '';
    event.target.stretcher.value = '';
    event.target.support.value = '';
    event.target.priming.value = '';
    event.target.paint_layer.value = '';
    event.target.varnish.value = '';
    event.target.img_front.value ='',
    event.target.img_back.value =''
  },
  insertData: function(){
// clear all placeholders before input
//    $('form').submit(function() {
//            $(this).find('.individual-value').each(function() {
//                $(this).val('');
//            });
//    });

////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#aas').is(':checked')){

      var aasDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var aasMajority = {
            experimentalParameters:document.getElementById("object_aasExperimental").value,
            elements:document.getElementById("object_aasElements").value,
            formulae:document.getElementById("object_aasFormulae").value,
            pigmentsDyes:document.getElementById("object_aasPigmentsDyes").value,
            priming:document.getElementById("object_aasPriming").value,
            bindingMedia:document.getElementById("object_aasBindingMedia").value,
            varnish:document.getElementById("object_aasVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_aasStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_aasBrief").value,
              comments:document.getElementById("object_aasComments").value,
              sources:document.getElementById("object_aasSources").value,
              caption:document.getElementById("object_aasCaption").value,
            },
            files:{
              aasFiles1:document.getElementById("aasFiles1").value,
              aasFiles1_id:document.getElementById("aasFiles1_id").value,
              aasFiles2:document.getElementById("aasFiles2").value,
              aasFiles2_id:document.getElementById("aasFiles2_id").value,
              aasFiles3:document.getElementById("aasFiles3").value,
              aasFiles3_id:document.getElementById("aasFiles3_id").value,
              aasFiles4:document.getElementById("aasFiles4").value,
              aasFiles4_id:document.getElementById("aasFiles4_id").value,
              aasFiles5:document.getElementById("aasFiles5").value,
              aasFiles5_id:document.getElementById("aasFiles5_id").value,
            }
        }

        var aasDetails = aasMajority;

      } else {

        var aasPigment = {
            experimentalParameters:document.getElementById("object_aasExperimental").value,
            elements:document.getElementById("object_aasElements").value,
            quantification:document.getElementById("object_aasQuantification").value,
            formulae:document.getElementById("object_aasFormulae").value,
            influence:document.getElementById("object_aasInfluence").value,
            colorValues:document.getElementById("object_aasColorValues").value,
            bands:document.getElementById("object_aasBands").value,
            notes:{
              comments:document.getElementById("object_aasComments").value,
              caption:document.getElementById("object_aasCaption").value,
            },
            files:{
              aasFiles1:document.getElementById("aasFiles1").value,
              aasFiles1_id:document.getElementById("aasFiles1_id").value,
              aasFiles2:document.getElementById("aasFiles2").value,
              aasFiles2_id:document.getElementById("aasFiles2_id").value,
              aasFiles3:document.getElementById("aasFiles3").value,
              aasFiles3_id:document.getElementById("aasFiles3_id").value,
              aasFiles4:document.getElementById("aasFiles4").value,
              aasFiles4_id:document.getElementById("aasFiles4_id").value,
              aasFiles5:document.getElementById("aasFiles5").value,
              aasFiles5_id:document.getElementById("aasFiles5_id").value,
            }
        }

        var aasDetails = aasPigment;

      }


    }
////////////////////////////////////////////////////////////////////////////////////////    
  
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#aes').is(':checked')){

      var aesDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var aesMajority = {
            experimentalParameters:document.getElementById("object_aesExperimental").value,
            elements:document.getElementById("object_aesElements").value,
            formulae:document.getElementById("object_aesFormulae").value,
            pigmentsDyes:document.getElementById("object_aesPigmentsDyes").value,
            priming:document.getElementById("object_aesPriming").value,
            bindingMedia:document.getElementById("object_aesBindingMedia").value,
            varnish:document.getElementById("object_aesVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_aesStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_aesBrief").value,
              comments:document.getElementById("object_aesComments").value,
              sources:document.getElementById("object_aesSources").value,
              caption:document.getElementById("object_aesCaption").value,
            },
            files:{
              aesFiles1:document.getElementById("aesFiles1").value,
              aesFiles1_id:document.getElementById("aesFiles1_id").value,
              aesFiles2:document.getElementById("aesFiles2").value,
              aesFiles2_id:document.getElementById("aesFiles2_id").value,
              aesFiles3:document.getElementById("aesFiles3").value,
              aesFiles3_id:document.getElementById("aesFiles3_id").value,
              aesFiles4:document.getElementById("aesFiles4").value,
              aesFiles4_id:document.getElementById("aesFiles4_id").value,
              aesFiles5:document.getElementById("aesFiles5").value,
              aesFiles5_id:document.getElementById("aesFiles5_id").value,
            }
        }

        var aesDetails = aesMajority;

      } else {

        var aesPigment = {
            experimentalParameters:document.getElementById("object_aesExperimental").value,
            elements:document.getElementById("object_aesElements").value,
            quantification:document.getElementById("object_aesQuantification").value,
            formulae:document.getElementById("object_aesFormulae").value,
            influence:document.getElementById("object_aesInfluence").value,
            colorValues:document.getElementById("object_aesColorValues").value,
            bands:document.getElementById("object_aesBands").value,
            notes:{
              comments:document.getElementById("object_aesComments").value,
              caption:document.getElementById("object_aesCaption").value,
            },
            files:{
              aesFiles1:document.getElementById("aesFiles1").value,
              aesFiles1_id:document.getElementById("aesFiles1_id").value,
              aesFiles2:document.getElementById("aesFiles2").value,
              aesFiles2_id:document.getElementById("aesFiles2_id").value,
              aesFiles3:document.getElementById("aesFiles3").value,
              aesFiles3_id:document.getElementById("aesFiles3_id").value,
              aesFiles4:document.getElementById("aesFiles4").value,
              aesFiles4_id:document.getElementById("aesFiles4_id").value,
              aesFiles5:document.getElementById("aesFiles5").value,
              aesFiles5_id:document.getElementById("aesFiles5_id").value,
            }
        }

        var aesDetails = aesPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#afm').is(':checked')){

      var afmDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var afmMajority = {
            experimentalParameters:document.getElementById("object_afmExperimental").value,
            elements:document.getElementById("object_afmElements").value,
            formulae:document.getElementById("object_afmFormulae").value,
            pigmentsDyes:document.getElementById("object_afmPigmentsDyes").value,
            priming:document.getElementById("object_afmPriming").value,
            bindingMedia:document.getElementById("object_afmBindingMedia").value,
            varnish:document.getElementById("object_afmVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_afmStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_afmBrief").value,
              comments:document.getElementById("object_afmComments").value,
              sources:document.getElementById("object_afmSources").value,
              caption:document.getElementById("object_afmCaption").value,
            },
            files:{
              afmFiles1:document.getElementById("afmFiles1").value,
              afmFiles1_id:document.getElementById("afmFiles1_id").value,
              afmFiles2:document.getElementById("afmFiles2").value,
              afmFiles2_id:document.getElementById("afmFiles2_id").value,
              afmFiles3:document.getElementById("afmFiles3").value,
              afmFiles3_id:document.getElementById("afmFiles3_id").value,
              afmFiles4:document.getElementById("afmFiles4").value,
              afmFiles4_id:document.getElementById("afmFiles4_id").value,
              afmFiles5:document.getElementById("afmFiles5").value,
              afmFiles5_id:document.getElementById("afmFiles5_id").value,
            }
        }

        var afmDetails = afmMajority;

      } else {

        var afmPigment = {
            experimentalParameters:document.getElementById("object_afmExperimental").value,
            elements:document.getElementById("object_afmElements").value,
            quantification:document.getElementById("object_afmQuantification").value,
            formulae:document.getElementById("object_afmFormulae").value,
            influence:document.getElementById("object_afmInfluence").value,
            colorValues:document.getElementById("object_afmColorValues").value,
            bands:document.getElementById("object_afmBands").value,
            notes:{
              comments:document.getElementById("object_afmComments").value,
              caption:document.getElementById("object_afmCaption").value,
            },
            files:{
              afmFiles1:document.getElementById("afmFiles1").value,
              afmFiles1_id:document.getElementById("afmFiles1_id").value,
              afmFiles2:document.getElementById("afmFiles2").value,
              afmFiles2_id:document.getElementById("afmFiles2_id").value,
              afmFiles3:document.getElementById("afmFiles3").value,
              afmFiles3_id:document.getElementById("afmFiles3_id").value,
              afmFiles4:document.getElementById("afmFiles4").value,
              afmFiles4_id:document.getElementById("afmFiles4_id").value,
              afmFiles5:document.getElementById("afmFiles5").value,
              afmFiles5_id:document.getElementById("afmFiles5_id").value,
            }
        }

        var afmDetails = afmPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#analysis').is(':checked')){

      var analysisDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var analysisMajority = {
            experimentalParameters:document.getElementById("object_analysisExperimental").value,
            elements:document.getElementById("object_analysisElements").value,
            formulae:document.getElementById("object_analysisFormulae").value,
            pigmentsDyes:document.getElementById("object_analysisPigmentsDyes").value,
            priming:document.getElementById("object_analysisPriming").value,
            bindingMedia:document.getElementById("object_analysisBindingMedia").value,
            varnish:document.getElementById("object_analysisVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_analysisStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_analysisBrief").value,
              comments:document.getElementById("object_analysisComments").value,
              sources:document.getElementById("object_analysisSources").value,
              caption:document.getElementById("object_analysisCaption").value,
            },
            files:{
              analysisFiles1:document.getElementById("analysisFiles1").value,
              analysisFiles1_id:document.getElementById("analysisFiles1_id").value,
              analysisFiles2:document.getElementById("analysisFiles2").value,
              analysisFiles2_id:document.getElementById("analysisFiles2_id").value,
              analysisFiles3:document.getElementById("analysisFiles3").value,
              analysisFiles3_id:document.getElementById("analysisFiles3_id").value,
              analysisFiles4:document.getElementById("analysisFiles4").value,
              analysisFiles4_id:document.getElementById("analysisFiles4_id").value,
              analysisFiles5:document.getElementById("analysisFiles5").value,
              analysisFiles5_id:document.getElementById("analysisFiles5_id").value,
            }
        }

        var analysisDetails = analysisMajority;

      } else {

        var analysisPigment = {
            experimentalParameters:document.getElementById("object_analysisExperimental").value,
            elements:document.getElementById("object_analysisElements").value,
            quantification:document.getElementById("object_analysisQuantification").value,
            formulae:document.getElementById("object_analysisFormulae").value,
            influence:document.getElementById("object_analysisInfluence").value,
            colorValues:document.getElementById("object_analysisColorValues").value,
            bands:document.getElementById("object_analysisBands").value,
            notes:{
              comments:document.getElementById("object_analysisComments").value,
              caption:document.getElementById("object_analysisCaption").value,
            },
            files:{
              analysisFiles1:document.getElementById("analysisFiles1").value,
              analysisFiles1_id:document.getElementById("analysisFiles1_id").value,
              analysisFiles2:document.getElementById("analysisFiles2").value,
              analysisFiles2_id:document.getElementById("analysisFiles2_id").value,
              analysisFiles3:document.getElementById("analysisFiles3").value,
              analysisFiles3_id:document.getElementById("analysisFiles3_id").value,
              analysisFiles4:document.getElementById("analysisFiles4").value,
              analysisFiles4_id:document.getElementById("analysisFiles4_id").value,
              analysisFiles5:document.getElementById("analysisFiles5").value,
              analysisFiles5_id:document.getElementById("analysisFiles5_id").value,
            }
        }

        var analysisDetails = analysisPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#binderFiller').is(':checked')){

      var binderFillerDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var binderFillerMajority = {
            experimentalParameters:document.getElementById("object_binderFillerExperimental").value,
            elements:document.getElementById("object_binderFillerElements").value,
            formulae:document.getElementById("object_binderFillerFormulae").value,
            pigmentsDyes:document.getElementById("object_binderFillerPigmentsDyes").value,
            priming:document.getElementById("object_binderFillerPriming").value,
            bindingMedia:document.getElementById("object_binderFillerBindingMedia").value,
            varnish:document.getElementById("object_binderFillerVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_binderFillerStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_binderFillerBrief").value,
              comments:document.getElementById("object_binderFillerComments").value,
              sources:document.getElementById("object_binderFillerSources").value,
              caption:document.getElementById("object_binderFillerCaption").value,
            },
            files:{
              binderFillerFiles1:document.getElementById("binderFillerFiles1").value,
              binderFillerFiles1_id:document.getElementById("binderFillerFiles1_id").value,
              binderFillerFiles2:document.getElementById("binderFillerFiles2").value,
              binderFillerFiles2_id:document.getElementById("binderFillerFiles2_id").value,
              binderFillerFiles3:document.getElementById("binderFillerFiles3").value,
              binderFillerFiles3_id:document.getElementById("binderFillerFiles3_id").value,
              binderFillerFiles4:document.getElementById("binderFillerFiles4").value,
              binderFillerFiles4_id:document.getElementById("binderFillerFiles4_id").value,
              binderFillerFiles5:document.getElementById("binderFillerFiles5").value,
              binderFillerFiles5_id:document.getElementById("binderFillerFiles5_id").value,
            }
        }

        var binderFillerDetails = binderFillerMajority;

      } else {

        var binderFillerPigment = {
            experimentalParameters:document.getElementById("object_binderFillerExperimental").value,
            elements:document.getElementById("object_binderFillerElements").value,
            quantification:document.getElementById("object_binderFillerQuantification").value,
            formulae:document.getElementById("object_binderFillerFormulae").value,
            influence:document.getElementById("object_binderFillerInfluence").value,
            colorValues:document.getElementById("object_binderFillerColorValues").value,
            bands:document.getElementById("object_binderFillerBands").value,
            notes:{
              comments:document.getElementById("object_binderFillerComments").value,
              caption:document.getElementById("object_binderFillerCaption").value,
            },
            files:{
              binderFillerFiles1:document.getElementById("binderFillerFiles1").value,
              binderFillerFiles1_id:document.getElementById("binderFillerFiles1_id").value,
              binderFillerFiles2:document.getElementById("binderFillerFiles2").value,
              binderFillerFiles2_id:document.getElementById("binderFillerFiles2_id").value,
              binderFillerFiles3:document.getElementById("binderFillerFiles3").value,
              binderFillerFiles3_id:document.getElementById("binderFillerFiles3_id").value,
              binderFillerFiles4:document.getElementById("binderFillerFiles4").value,
              binderFillerFiles4_id:document.getElementById("binderFillerFiles4_id").value,
              binderFillerFiles5:document.getElementById("binderFillerFiles5").value,
              binderFillerFiles5_id:document.getElementById("binderFillerFiles5_id").value,
            }
        }

        var binderFillerDetails = binderFillerPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#c_14').is(':checked')){

      var c_14Details = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var c_14Majority = {
            experimentalParameters:document.getElementById("object_c_14Experimental").value,
            elements:document.getElementById("object_c_14Elements").value,
            formulae:document.getElementById("object_c_14Formulae").value,
            pigmentsDyes:document.getElementById("object_c_14PigmentsDyes").value,
            priming:document.getElementById("object_c_14Priming").value,
            bindingMedia:document.getElementById("object_c_14BindingMedia").value,
            varnish:document.getElementById("object_c_14Varnish").value,
            stretcherSupportStrainer:document.getElementById("object_c_14StretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_c_14Brief").value,
              comments:document.getElementById("object_c_14Comments").value,
              sources:document.getElementById("object_c_14Sources").value,
              caption:document.getElementById("object_c_14Caption").value,
            },
            files:{
              c_14Files1:document.getElementById("c_14Files1").value,
              c_14Files1_id:document.getElementById("c_14Files1_id").value,
              c_14Files2:document.getElementById("c_14Files2").value,
              c_14Files2_id:document.getElementById("c_14Files2_id").value,
              c_14Files3:document.getElementById("c_14Files3").value,
              c_14Files3_id:document.getElementById("c_14Files3_id").value,
              c_14Files4:document.getElementById("c_14Files4").value,
              c_14Files4_id:document.getElementById("c_14Files4_id").value,
              c_14Files5:document.getElementById("c_14Files5").value,
              c_14Files5_id:document.getElementById("c_14Files5_id").value,
            }
        }

        var c_14Details = c_14Majority;

      } else {

        var c_14Pigment = {
            experimentalParameters:document.getElementById("object_c_14Experimental").value,
            elements:document.getElementById("object_c_14Elements").value,
            quantification:document.getElementById("object_c_14Quantification").value,
            formulae:document.getElementById("object_c_14Formulae").value,
            influence:document.getElementById("object_c_14Influence").value,
            colorValues:document.getElementById("object_c_14ColorValues").value,
            bands:document.getElementById("object_c_14Bands").value,
            notes:{
              comments:document.getElementById("object_c_14Comments").value,
              caption:document.getElementById("object_c_14Caption").value,
            },
            files:{
              c_14Files1:document.getElementById("c_14Files1").value,
              c_14Files1_id:document.getElementById("c_14Files1_id").value,
              c_14Files2:document.getElementById("c_14Files2").value,
              c_14Files2_id:document.getElementById("c_14Files2_id").value,
              c_14Files3:document.getElementById("c_14Files3").value,
              c_14Files3_id:document.getElementById("c_14Files3_id").value,
              c_14Files4:document.getElementById("c_14Files4").value,
              c_14Files4_id:document.getElementById("c_14Files4_id").value,
              c_14Files5:document.getElementById("c_14Files5").value,
              c_14Files5_id:document.getElementById("c_14Files5_id").value,
            }
        }

        var c_14Details = c_14Pigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#colorimetry').is(':checked')){

      var colorimetryDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var colorimetryMajority = {
            experimentalParameters:document.getElementById("object_colorimetryExperimental").value,
            elements:document.getElementById("object_colorimetryElements").value,
            formulae:document.getElementById("object_colorimetryFormulae").value,
            pigmentsDyes:document.getElementById("object_colorimetryPigmentsDyes").value,
            priming:document.getElementById("object_colorimetryPriming").value,
            bindingMedia:document.getElementById("object_colorimetryBindingMedia").value,
            varnish:document.getElementById("object_colorimetryVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_colorimetryStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_colorimetryBrief").value,
              comments:document.getElementById("object_colorimetryComments").value,
              sources:document.getElementById("object_colorimetrySources").value,
              caption:document.getElementById("object_colorimetryCaption").value,
            },
            files:{
              colorimetryFiles1:document.getElementById("colorimetryFiles1").value,
              colorimetryFiles1_id:document.getElementById("colorimetryFiles1_id").value,
              colorimetryFiles2:document.getElementById("colorimetryFiles2").value,
              colorimetryFiles2_id:document.getElementById("colorimetryFiles2_id").value,
              colorimetryFiles3:document.getElementById("colorimetryFiles3").value,
              colorimetryFiles3_id:document.getElementById("colorimetryFiles3_id").value,
              colorimetryFiles4:document.getElementById("colorimetryFiles4").value,
              colorimetryFiles4_id:document.getElementById("colorimetryFiles4_id").value,
              colorimetryFiles5:document.getElementById("colorimetryFiles5").value,
              colorimetryFiles5_id:document.getElementById("colorimetryFiles5_id").value,
            }
        }

        var colorimetryDetails = colorimetryMajority;

      } else {

        var colorimetryPigment = {
            experimentalParameters:document.getElementById("object_colorimetryExperimental").value,
            elements:document.getElementById("object_colorimetryElements").value,
            quantification:document.getElementById("object_colorimetryQuantification").value,
            formulae:document.getElementById("object_colorimetryFormulae").value,
            influence:document.getElementById("object_colorimetryInfluence").value,
            colorValues:document.getElementById("object_colorimetryColorValues").value,
            bands:document.getElementById("object_colorimetryBands").value,
            notes:{
              comments:document.getElementById("object_colorimetryComments").value,
              caption:document.getElementById("object_colorimetryCaption").value,
            },
            files:{
              colorimetryFiles1:document.getElementById("colorimetryFiles1").value,
              colorimetryFiles1_id:document.getElementById("colorimetryFiles1_id").value,
              colorimetryFiles2:document.getElementById("colorimetryFiles2").value,
              colorimetryFiles2_id:document.getElementById("colorimetryFiles2_id").value,
              colorimetryFiles3:document.getElementById("colorimetryFiles3").value,
              colorimetryFiles3_id:document.getElementById("colorimetryFiles3_id").value,
              colorimetryFiles4:document.getElementById("colorimetryFiles4").value,
              colorimetryFiles4_id:document.getElementById("colorimetryFiles4_id").value,
              colorimetryFiles5:document.getElementById("colorimetryFiles5").value,
              colorimetryFiles5_id:document.getElementById("colorimetryFiles5_id").value,
            }
        }

        var colorimetryDetails = colorimetryPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#drms').is(':checked')){

      var drmsDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var drmsMajority = {
            experimentalParameters:document.getElementById("object_drmsExperimental").value,
            elements:document.getElementById("object_drmsElements").value,
            formulae:document.getElementById("object_drmsFormulae").value,
            pigmentsDyes:document.getElementById("object_drmsPigmentsDyes").value,
            priming:document.getElementById("object_drmsPriming").value,
            bindingMedia:document.getElementById("object_drmsBindingMedia").value,
            varnish:document.getElementById("object_drmsVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_drmsStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_drmsBrief").value,
              comments:document.getElementById("object_drmsComments").value,
              sources:document.getElementById("object_drmsSources").value,
              caption:document.getElementById("object_drmsCaption").value,
            },
            files:{
              drmsFiles1:document.getElementById("drmsFiles1").value,
              drmsFiles1_id:document.getElementById("drmsFiles1_id").value,
              drmsFiles2:document.getElementById("drmsFiles2").value,
              drmsFiles2_id:document.getElementById("drmsFiles2_id").value,
              drmsFiles3:document.getElementById("drmsFiles3").value,
              drmsFiles3_id:document.getElementById("drmsFiles3_id").value,
              drmsFiles4:document.getElementById("drmsFiles4").value,
              drmsFiles4_id:document.getElementById("drmsFiles4_id").value,
              drmsFiles5:document.getElementById("drmsFiles5").value,
              drmsFiles5_id:document.getElementById("drmsFiles5_id").value,
            }
        }

        var drmsDetails = drmsMajority;

      } else {

        var drmsPigment = {
            experimentalParameters:document.getElementById("object_drmsExperimental").value,
            elements:document.getElementById("object_drmsElements").value,
            quantification:document.getElementById("object_drmsQuantification").value,
            formulae:document.getElementById("object_drmsFormulae").value,
            influence:document.getElementById("object_drmsInfluence").value,
            colorValues:document.getElementById("object_drmsColorValues").value,
            bands:document.getElementById("object_drmsBands").value,
            notes:{
              comments:document.getElementById("object_drmsComments").value,
              caption:document.getElementById("object_drmsCaption").value,
            },
            files:{
              drmsFiles1:document.getElementById("drmsFiles1").value,
              drmsFiles1_id:document.getElementById("drmsFiles1_id").value,
              drmsFiles2:document.getElementById("drmsFiles2").value,
              drmsFiles2_id:document.getElementById("drmsFiles2_id").value,
              drmsFiles3:document.getElementById("drmsFiles3").value,
              drmsFiles3_id:document.getElementById("drmsFiles3_id").value,
              drmsFiles4:document.getElementById("drmsFiles4").value,
              drmsFiles4_id:document.getElementById("drmsFiles4_id").value,
              drmsFiles5:document.getElementById("drmsFiles5").value,
              drmsFiles5_id:document.getElementById("drmsFiles5_id").value,
            }
        }

        var drmsDetails = drmsPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#fors').is(':checked')){

      var forsDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var forsMajority = {
            experimentalParameters:document.getElementById("object_forsExperimental").value,
            elements:document.getElementById("object_forsElements").value,
            formulae:document.getElementById("object_forsFormulae").value,
            pigmentsDyes:document.getElementById("object_forsPigmentsDyes").value,
            priming:document.getElementById("object_forsPriming").value,
            bindingMedia:document.getElementById("object_forsBindingMedia").value,
            varnish:document.getElementById("object_forsVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_forsStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_forsBrief").value,
              comments:document.getElementById("object_forsComments").value,
              sources:document.getElementById("object_forsSources").value,
              caption:document.getElementById("object_forsCaption").value,
            },
            files:{
              forsFiles1:document.getElementById("forsFiles1").value,
              forsFiles1_id:document.getElementById("forsFiles1_id").value,
              forsFiles2:document.getElementById("forsFiles2").value,
              forsFiles2_id:document.getElementById("forsFiles2_id").value,
              forsFiles3:document.getElementById("forsFiles3").value,
              forsFiles3_id:document.getElementById("forsFiles3_id").value,
              forsFiles4:document.getElementById("forsFiles4").value,
              forsFiles4_id:document.getElementById("forsFiles4_id").value,
              forsFiles5:document.getElementById("forsFiles5").value,
              forsFiles5_id:document.getElementById("forsFiles5_id").value,
            }
        }

        var forsDetails = forsMajority;

      } else {

        var forsPigment = {
            experimentalParameters:document.getElementById("object_forsExperimental").value,
            elements:document.getElementById("object_forsElements").value,
            quantification:document.getElementById("object_forsQuantification").value,
            formulae:document.getElementById("object_forsFormulae").value,
            influence:document.getElementById("object_forsInfluence").value,
            colorValues:document.getElementById("object_forsColorValues").value,
            bands:document.getElementById("object_forsBands").value,
            notes:{
              comments:document.getElementById("object_forsComments").value,
              caption:document.getElementById("object_forsCaption").value,
            },
            files:{
              forsFiles1:document.getElementById("forsFiles1").value,
              forsFiles1_id:document.getElementById("forsFiles1_id").value,
              forsFiles2:document.getElementById("forsFiles2").value,
              forsFiles2_id:document.getElementById("forsFiles2_id").value,
              forsFiles3:document.getElementById("forsFiles3").value,
              forsFiles3_id:document.getElementById("forsFiles3_id").value,
              forsFiles4:document.getElementById("forsFiles4").value,
              forsFiles4_id:document.getElementById("forsFiles4_id").value,
              forsFiles5:document.getElementById("forsFiles5").value,
              forsFiles5_id:document.getElementById("forsFiles5_id").value,
            }
        }

        var forsDetails = forsPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#ft_ir').is(':checked')){

      var ft_irDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var ft_irMajority = {
            experimentalParameters:document.getElementById("object_ft_irExperimental").value,
            elements:document.getElementById("object_ft_irElements").value,
            formulae:document.getElementById("object_ft_irFormulae").value,
            pigmentsDyes:document.getElementById("object_ft_irPigmentsDyes").value,
            priming:document.getElementById("object_ft_irPriming").value,
            bindingMedia:document.getElementById("object_ft_irBindingMedia").value,
            varnish:document.getElementById("object_ft_irVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_ft_irStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_ft_irBrief").value,
              comments:document.getElementById("object_ft_irComments").value,
              sources:document.getElementById("object_ft_irSources").value,
              caption:document.getElementById("object_ft_irCaption").value,
            },
            files:{
              ft_irFiles1:document.getElementById("ft_irFiles1").value,
              ft_irFiles1_id:document.getElementById("ft_irFiles1_id").value,
              ft_irFiles2:document.getElementById("ft_irFiles2").value,
              ft_irFiles2_id:document.getElementById("ft_irFiles2_id").value,
              ft_irFiles3:document.getElementById("ft_irFiles3").value,
              ft_irFiles3_id:document.getElementById("ft_irFiles3_id").value,
              ft_irFiles4:document.getElementById("ft_irFiles4").value,
              ft_irFiles4_id:document.getElementById("ft_irFiles4_id").value,
              ft_irFiles5:document.getElementById("ft_irFiles5").value,
              ft_irFiles5_id:document.getElementById("ft_irFiles5_id").value,
            }
        }

        var ft_irDetails = ft_irMajority;

      } else {

        var ft_irPigment = {
            experimentalParameters:document.getElementById("object_ft_irExperimental").value,
            elements:document.getElementById("object_ft_irElements").value,
            quantification:document.getElementById("object_ft_irQuantification").value,
            formulae:document.getElementById("object_ft_irFormulae").value,
            influence:document.getElementById("object_ft_irInfluence").value,
            colorValues:document.getElementById("object_ft_irColorValues").value,
            bands:document.getElementById("object_ft_irBands").value,
            notes:{
              comments:document.getElementById("object_ft_irComments").value,
              caption:document.getElementById("object_ft_irCaption").value,
            },
            files:{
              ft_irFiles1:document.getElementById("ft_irFiles1").value,
              ft_irFiles1_id:document.getElementById("ft_irFiles1_id").value,
              ft_irFiles2:document.getElementById("ft_irFiles2").value,
              ft_irFiles2_id:document.getElementById("ft_irFiles2_id").value,
              ft_irFiles3:document.getElementById("ft_irFiles3").value,
              ft_irFiles3_id:document.getElementById("ft_irFiles3_id").value,
              ft_irFiles4:document.getElementById("ft_irFiles4").value,
              ft_irFiles4_id:document.getElementById("ft_irFiles4_id").value,
              ft_irFiles5:document.getElementById("ft_irFiles5").value,
              ft_irFiles5_id:document.getElementById("ft_irFiles5_id").value,
            }
        }

        var ft_irDetails = ft_irPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#gc_ms').is(':checked')){

      var gc_msDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var gc_msMajority = {
            experimentalParameters:document.getElementById("object_gc_msExperimental").value,
            elements:document.getElementById("object_gc_msElements").value,
            formulae:document.getElementById("object_gc_msFormulae").value,
            pigmentsDyes:document.getElementById("object_gc_msPigmentsDyes").value,
            priming:document.getElementById("object_gc_msPriming").value,
            bindingMedia:document.getElementById("object_gc_msBindingMedia").value,
            varnish:document.getElementById("object_gc_msVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_gc_msStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_gc_msBrief").value,
              comments:document.getElementById("object_gc_msComments").value,
              sources:document.getElementById("object_gc_msSources").value,
              caption:document.getElementById("object_gc_msCaption").value,
            },
            files:{
              gc_msFiles1:document.getElementById("gc_msFiles1").value,
              gc_msFiles1_id:document.getElementById("gc_msFiles1_id").value,
              gc_msFiles2:document.getElementById("gc_msFiles2").value,
              gc_msFiles2_id:document.getElementById("gc_msFiles2_id").value,
              gc_msFiles3:document.getElementById("gc_msFiles3").value,
              gc_msFiles3_id:document.getElementById("gc_msFiles3_id").value,
              gc_msFiles4:document.getElementById("gc_msFiles4").value,
              gc_msFiles4_id:document.getElementById("gc_msFiles4_id").value,
              gc_msFiles5:document.getElementById("gc_msFiles5").value,
              gc_msFiles5_id:document.getElementById("gc_msFiles5_id").value,
            }
        }

        var gc_msDetails = gc_msMajority;

      } else {

        var gc_msPigment = {
            experimentalParameters:document.getElementById("object_gc_msExperimental").value,
            elements:document.getElementById("object_gc_msElements").value,
            quantification:document.getElementById("object_gc_msQuantification").value,
            formulae:document.getElementById("object_gc_msFormulae").value,
            influence:document.getElementById("object_gc_msInfluence").value,
            colorValues:document.getElementById("object_gc_msColorValues").value,
            bands:document.getElementById("object_gc_msBands").value,
            notes:{
              comments:document.getElementById("object_gc_msComments").value,
              caption:document.getElementById("object_gc_msCaption").value,
            },
            files:{
              gc_msFiles1:document.getElementById("gc_msFiles1").value,
              gc_msFiles1_id:document.getElementById("gc_msFiles1_id").value,
              gc_msFiles2:document.getElementById("gc_msFiles2").value,
              gc_msFiles2_id:document.getElementById("gc_msFiles2_id").value,
              gc_msFiles3:document.getElementById("gc_msFiles3").value,
              gc_msFiles3_id:document.getElementById("gc_msFiles3_id").value,
              gc_msFiles4:document.getElementById("gc_msFiles4").value,
              gc_msFiles4_id:document.getElementById("gc_msFiles4_id").value,
              gc_msFiles5:document.getElementById("gc_msFiles5").value,
              gc_msFiles5_id:document.getElementById("gc_msFiles5_id").value,
            }
        }

        var gc_msDetails = gc_msPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#gl').is(':checked')){

      var glDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var glMajority = {
            experimentalParameters:document.getElementById("object_glExperimental").value,
            elements:document.getElementById("object_glElements").value,
            formulae:document.getElementById("object_glFormulae").value,
            pigmentsDyes:document.getElementById("object_glPigmentsDyes").value,
            priming:document.getElementById("object_glPriming").value,
            bindingMedia:document.getElementById("object_glBindingMedia").value,
            varnish:document.getElementById("object_glVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_glStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_glBrief").value,
              comments:document.getElementById("object_glComments").value,
              sources:document.getElementById("object_glSources").value,
              caption:document.getElementById("object_glCaption").value,
            },
            files:{
              glFiles1:document.getElementById("glFiles1").value,
              glFiles1_id:document.getElementById("glFiles1_id").value,
              glFiles2:document.getElementById("glFiles2").value,
              glFiles2_id:document.getElementById("glFiles2_id").value,
              glFiles3:document.getElementById("glFiles3").value,
              glFiles3_id:document.getElementById("glFiles3_id").value,
              glFiles4:document.getElementById("glFiles4").value,
              glFiles4_id:document.getElementById("glFiles4_id").value,
              glFiles5:document.getElementById("glFiles5").value,
              glFiles5_id:document.getElementById("glFiles5_id").value,
            }
        }

        var glDetails = glMajority;

      } else {

        var glPigment = {
            experimentalParameters:document.getElementById("object_glExperimental").value,
            elements:document.getElementById("object_glElements").value,
            quantification:document.getElementById("object_glQuantification").value,
            formulae:document.getElementById("object_glFormulae").value,
            influence:document.getElementById("object_glInfluence").value,
            colorValues:document.getElementById("object_glColorValues").value,
            bands:document.getElementById("object_glBands").value,
            notes:{
              comments:document.getElementById("object_glComments").value,
              caption:document.getElementById("object_glCaption").value,
            },
            files:{
              glFiles1:document.getElementById("glFiles1").value,
              glFiles1_id:document.getElementById("glFiles1_id").value,
              glFiles2:document.getElementById("glFiles2").value,
              glFiles2_id:document.getElementById("glFiles2_id").value,
              glFiles3:document.getElementById("glFiles3").value,
              glFiles3_id:document.getElementById("glFiles3_id").value,
              glFiles4:document.getElementById("glFiles4").value,
              glFiles4_id:document.getElementById("glFiles4_id").value,
              glFiles5:document.getElementById("glFiles5").value,
              glFiles5_id:document.getElementById("glFiles5_id").value,
            }
        }

        var glDetails = glPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#granulometry').is(':checked')){

      var granulometryDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var granulometryMajority = {
            experimentalParameters:document.getElementById("object_granulometryExperimental").value,
            elements:document.getElementById("object_granulometryElements").value,
            formulae:document.getElementById("object_granulometryFormulae").value,
            pigmentsDyes:document.getElementById("object_granulometryPigmentsDyes").value,
            priming:document.getElementById("object_granulometryPriming").value,
            bindingMedia:document.getElementById("object_granulometryBindingMedia").value,
            varnish:document.getElementById("object_granulometryVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_granulometryStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_granulometryBrief").value,
              comments:document.getElementById("object_granulometryComments").value,
              sources:document.getElementById("object_granulometrySources").value,
              caption:document.getElementById("object_granulometryCaption").value,
            },
            files:{
              granulometryFiles1:document.getElementById("granulometryFiles1").value,
              granulometryFiles1_id:document.getElementById("granulometryFiles1_id").value,
              granulometryFiles2:document.getElementById("granulometryFiles2").value,
              granulometryFiles2_id:document.getElementById("granulometryFiles2_id").value,
              granulometryFiles3:document.getElementById("granulometryFiles3").value,
              granulometryFiles3_id:document.getElementById("granulometryFiles3_id").value,
              granulometryFiles4:document.getElementById("granulometryFiles4").value,
              granulometryFiles4_id:document.getElementById("granulometryFiles4_id").value,
              granulometryFiles5:document.getElementById("granulometryFiles5").value,
              granulometryFiles5_id:document.getElementById("granulometryFiles5_id").value,
            }
        }

        var granulometryDetails = granulometryMajority;

      } else {

        var granulometryPigment = {
            experimentalParameters:document.getElementById("object_granulometryExperimental").value,
            elements:document.getElementById("object_granulometryElements").value,
            quantification:document.getElementById("object_granulometryQuantification").value,
            formulae:document.getElementById("object_granulometryFormulae").value,
            influence:document.getElementById("object_granulometryInfluence").value,
            colorValues:document.getElementById("object_granulometryColorValues").value,
            bands:document.getElementById("object_granulometryBands").value,
            notes:{
              comments:document.getElementById("object_granulometryComments").value,
              caption:document.getElementById("object_granulometryCaption").value,
            },
            files:{
              granulometryFiles1:document.getElementById("granulometryFiles1").value,
              granulometryFiles1_id:document.getElementById("granulometryFiles1_id").value,
              granulometryFiles2:document.getElementById("granulometryFiles2").value,
              granulometryFiles2_id:document.getElementById("granulometryFiles2_id").value,
              granulometryFiles3:document.getElementById("granulometryFiles3").value,
              granulometryFiles3_id:document.getElementById("granulometryFiles3_id").value,
              granulometryFiles4:document.getElementById("granulometryFiles4").value,
              granulometryFiles4_id:document.getElementById("granulometryFiles4_id").value,
              granulometryFiles5:document.getElementById("granulometryFiles5").value,
              granulometryFiles5_id:document.getElementById("granulometryFiles5_id").value,
            }
        }

        var granulometryDetails = granulometryPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#hygroscopic').is(':checked')){

      var hygroscopicDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var hygroscopicMajority = {
            experimentalParameters:document.getElementById("object_hygroscopicExperimental").value,
            elements:document.getElementById("object_hygroscopicElements").value,
            formulae:document.getElementById("object_hygroscopicFormulae").value,
            pigmentsDyes:document.getElementById("object_hygroscopicPigmentsDyes").value,
            priming:document.getElementById("object_hygroscopicPriming").value,
            bindingMedia:document.getElementById("object_hygroscopicBindingMedia").value,
            varnish:document.getElementById("object_hygroscopicVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_hygroscopicStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_hygroscopicBrief").value,
              comments:document.getElementById("object_hygroscopicComments").value,
              sources:document.getElementById("object_hygroscopicSources").value,
              caption:document.getElementById("object_hygroscopicCaption").value,
            },
            files:{
              hygroscopicFiles1:document.getElementById("hygroscopicFiles1").value,
              hygroscopicFiles1_id:document.getElementById("hygroscopicFiles1_id").value,
              hygroscopicFiles2:document.getElementById("hygroscopicFiles2").value,
              hygroscopicFiles2_id:document.getElementById("hygroscopicFiles2_id").value,
              hygroscopicFiles3:document.getElementById("hygroscopicFiles3").value,
              hygroscopicFiles3_id:document.getElementById("hygroscopicFiles3_id").value,
              hygroscopicFiles4:document.getElementById("hygroscopicFiles4").value,
              hygroscopicFiles4_id:document.getElementById("hygroscopicFiles4_id").value,
              hygroscopicFiles5:document.getElementById("hygroscopicFiles5").value,
              hygroscopicFiles5_id:document.getElementById("hygroscopicFiles5_id").value,
            }
        }

        var hygroscopicDetails = hygroscopicMajority;

      } else {

        var hygroscopicPigment = {
            experimentalParameters:document.getElementById("object_hygroscopicExperimental").value,
            elements:document.getElementById("object_hygroscopicElements").value,
            quantification:document.getElementById("object_hygroscopicQuantification").value,
            formulae:document.getElementById("object_hygroscopicFormulae").value,
            influence:document.getElementById("object_hygroscopicInfluence").value,
            colorValues:document.getElementById("object_hygroscopicColorValues").value,
            bands:document.getElementById("object_hygroscopicBands").value,
            notes:{
              comments:document.getElementById("object_hygroscopicComments").value,
              caption:document.getElementById("object_hygroscopicCaption").value,
            },
            files:{
              hygroscopicFiles1:document.getElementById("hygroscopicFiles1").value,
              hygroscopicFiles1_id:document.getElementById("hygroscopicFiles1_id").value,
              hygroscopicFiles2:document.getElementById("hygroscopicFiles2").value,
              hygroscopicFiles2_id:document.getElementById("hygroscopicFiles2_id").value,
              hygroscopicFiles3:document.getElementById("hygroscopicFiles3").value,
              hygroscopicFiles3_id:document.getElementById("hygroscopicFiles3_id").value,
              hygroscopicFiles4:document.getElementById("hygroscopicFiles4").value,
              hygroscopicFiles4_id:document.getElementById("hygroscopicFiles4_id").value,
              hygroscopicFiles5:document.getElementById("hygroscopicFiles5").value,
              hygroscopicFiles5_id:document.getElementById("hygroscopicFiles5_id").value,
            }
        }

        var hygroscopicDetails = hygroscopicPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#irpIrrIrfc').is(':checked')){

      var irpIrrIrfcDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var irpIrrIrfcMajority = {
            experimentalParameters:document.getElementById("object_irpIrrIrfcExperimental").value,
            elements:document.getElementById("object_irpIrrIrfcElements").value,
            formulae:document.getElementById("object_irpIrrIrfcFormulae").value,
            pigmentsDyes:document.getElementById("object_irpIrrIrfcPigmentsDyes").value,
            priming:document.getElementById("object_irpIrrIrfcPriming").value,
            bindingMedia:document.getElementById("object_irpIrrIrfcBindingMedia").value,
            varnish:document.getElementById("object_irpIrrIrfcVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_irpIrrIrfcStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_irpIrrIrfcBrief").value,
              comments:document.getElementById("object_irpIrrIrfcComments").value,
              sources:document.getElementById("object_irpIrrIrfcSources").value,
              caption:document.getElementById("object_irpIrrIrfcCaption").value,
            },
            files:{
              irpIrrIrfcFiles1:document.getElementById("irpIrrIrfcFiles1").value,
              irpIrrIrfcFiles1_id:document.getElementById("irpIrrIrfcFiles1_id").value,
              irpIrrIrfcFiles2:document.getElementById("irpIrrIrfcFiles2").value,
              irpIrrIrfcFiles2_id:document.getElementById("irpIrrIrfcFiles2_id").value,
              irpIrrIrfcFiles3:document.getElementById("irpIrrIrfcFiles3").value,
              irpIrrIrfcFiles3_id:document.getElementById("irpIrrIrfcFiles3_id").value,
              irpIrrIrfcFiles4:document.getElementById("irpIrrIrfcFiles4").value,
              irpIrrIrfcFiles4_id:document.getElementById("irpIrrIrfcFiles4_id").value,
              irpIrrIrfcFiles5:document.getElementById("irpIrrIrfcFiles5").value,
              irpIrrIrfcFiles5_id:document.getElementById("irpIrrIrfcFiles5_id").value,
            }
        }

        var irpIrrIrfcDetails = irpIrrIrfcMajority;

      } else {

        var irpIrrIrfcPigment = {
            experimentalParameters:document.getElementById("object_irpIrrIrfcExperimental").value,
            elements:document.getElementById("object_irpIrrIrfcElements").value,
            quantification:document.getElementById("object_irpIrrIrfcQuantification").value,
            formulae:document.getElementById("object_irpIrrIrfcFormulae").value,
            influence:document.getElementById("object_irpIrrIrfcInfluence").value,
            colorValues:document.getElementById("object_irpIrrIrfcColorValues").value,
            bands:document.getElementById("object_irpIrrIrfcBands").value,
            notes:{
              comments:document.getElementById("object_irpIrrIrfcComments").value,
              caption:document.getElementById("object_irpIrrIrfcCaption").value,
            },
            files:{
              irpIrrIrfcFiles1:document.getElementById("irpIrrIrfcFiles1").value,
              irpIrrIrfcFiles1_id:document.getElementById("irpIrrIrfcFiles1_id").value,
              irpIrrIrfcFiles2:document.getElementById("irpIrrIrfcFiles2").value,
              irpIrrIrfcFiles2_id:document.getElementById("irpIrrIrfcFiles2_id").value,
              irpIrrIrfcFiles3:document.getElementById("irpIrrIrfcFiles3").value,
              irpIrrIrfcFiles3_id:document.getElementById("irpIrrIrfcFiles3_id").value,
              irpIrrIrfcFiles4:document.getElementById("irpIrrIrfcFiles4").value,
              irpIrrIrfcFiles4_id:document.getElementById("irpIrrIrfcFiles4_id").value,
              irpIrrIrfcFiles5:document.getElementById("irpIrrIrfcFiles5").value,
              irpIrrIrfcFiles5_id:document.getElementById("irpIrrIrfcFiles5_id").value,
            }
        }

        var irpIrrIrfcDetails = irpIrrIrfcPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#libs').is(':checked')){

      var libsDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var libsMajority = {
            experimentalParameters:document.getElementById("object_libsExperimental").value,
            elements:document.getElementById("object_libsElements").value,
            formulae:document.getElementById("object_libsFormulae").value,
            pigmentsDyes:document.getElementById("object_libsPigmentsDyes").value,
            priming:document.getElementById("object_libsPriming").value,
            bindingMedia:document.getElementById("object_libsBindingMedia").value,
            varnish:document.getElementById("object_libsVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_libsStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_libsBrief").value,
              comments:document.getElementById("object_libsComments").value,
              sources:document.getElementById("object_libsSources").value,
              caption:document.getElementById("object_libsCaption").value,
            },
            files:{
              libsFiles1:document.getElementById("libsFiles1").value,
              libsFiles1_id:document.getElementById("libsFiles1_id").value,
              libsFiles2:document.getElementById("libsFiles2").value,
              libsFiles2_id:document.getElementById("libsFiles2_id").value,
              libsFiles3:document.getElementById("libsFiles3").value,
              libsFiles3_id:document.getElementById("libsFiles3_id").value,
              libsFiles4:document.getElementById("libsFiles4").value,
              libsFiles4_id:document.getElementById("libsFiles4_id").value,
              libsFiles5:document.getElementById("libsFiles5").value,
              libsFiles5_id:document.getElementById("libsFiles5_id").value,
            }
        }

        var libsDetails = libsMajority;

      } else {

        var libsPigment = {
            experimentalParameters:document.getElementById("object_libsExperimental").value,
            elements:document.getElementById("object_libsElements").value,
            quantification:document.getElementById("object_libsQuantification").value,
            formulae:document.getElementById("object_libsFormulae").value,
            influence:document.getElementById("object_libsInfluence").value,
            colorValues:document.getElementById("object_libsColorValues").value,
            bands:document.getElementById("object_libsBands").value,
            notes:{
              comments:document.getElementById("object_libsComments").value,
              caption:document.getElementById("object_libsCaption").value,
            },
            files:{
              libsFiles1:document.getElementById("libsFiles1").value,
              libsFiles1_id:document.getElementById("libsFiles1_id").value,
              libsFiles2:document.getElementById("libsFiles2").value,
              libsFiles2_id:document.getElementById("libsFiles2_id").value,
              libsFiles3:document.getElementById("libsFiles3").value,
              libsFiles3_id:document.getElementById("libsFiles3_id").value,
              libsFiles4:document.getElementById("libsFiles4").value,
              libsFiles4_id:document.getElementById("libsFiles4_id").value,
              libsFiles5:document.getElementById("libsFiles5").value,
              libsFiles5_id:document.getElementById("libsFiles5_id").value,
            }
        }

        var libsDetails = libsPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#ol').is(':checked')){

      var olDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var olMajority = {
            experimentalParameters:document.getElementById("object_olExperimental").value,
            elements:document.getElementById("object_olElements").value,
            formulae:document.getElementById("object_olFormulae").value,
            pigmentsDyes:document.getElementById("object_olPigmentsDyes").value,
            priming:document.getElementById("object_olPriming").value,
            bindingMedia:document.getElementById("object_olBindingMedia").value,
            varnish:document.getElementById("object_olVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_olStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_olBrief").value,
              comments:document.getElementById("object_olComments").value,
              sources:document.getElementById("object_olSources").value,
              caption:document.getElementById("object_olCaption").value,
            },
            files:{
              olFiles1:document.getElementById("olFiles1").value,
              olFiles1_id:document.getElementById("olFiles1_id").value,
              olFiles2:document.getElementById("olFiles2").value,
              olFiles2_id:document.getElementById("olFiles2_id").value,
              olFiles3:document.getElementById("olFiles3").value,
              olFiles3_id:document.getElementById("olFiles3_id").value,
              olFiles4:document.getElementById("olFiles4").value,
              olFiles4_id:document.getElementById("olFiles4_id").value,
              olFiles5:document.getElementById("olFiles5").value,
              olFiles5_id:document.getElementById("olFiles5_id").value,
            }
        }

        var olDetails = olMajority;

      } else {

        var olPigment = {
            experimentalParameters:document.getElementById("object_olExperimental").value,
            elements:document.getElementById("object_olElements").value,
            quantification:document.getElementById("object_olQuantification").value,
            formulae:document.getElementById("object_olFormulae").value,
            influence:document.getElementById("object_olInfluence").value,
            colorValues:document.getElementById("object_olColorValues").value,
            bands:document.getElementById("object_olBands").value,
            notes:{
              comments:document.getElementById("object_olComments").value,
              caption:document.getElementById("object_olCaption").value,
            },
            files:{
              olFiles1:document.getElementById("olFiles1").value,
              olFiles1_id:document.getElementById("olFiles1_id").value,
              olFiles2:document.getElementById("olFiles2").value,
              olFiles2_id:document.getElementById("olFiles2_id").value,
              olFiles3:document.getElementById("olFiles3").value,
              olFiles3_id:document.getElementById("olFiles3_id").value,
              olFiles4:document.getElementById("olFiles4").value,
              olFiles4_id:document.getElementById("olFiles4_id").value,
              olFiles5:document.getElementById("olFiles5").value,
              olFiles5_id:document.getElementById("olFiles5_id").value,
            }
        }

        var olDetails = olPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#om').is(':checked')){

      var omDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var omMajority = {
            experimentalParameters:document.getElementById("object_omExperimental").value,
            elements:document.getElementById("object_omElements").value,
            formulae:document.getElementById("object_omFormulae").value,
            pigmentsDyes:document.getElementById("object_omPigmentsDyes").value,
            priming:document.getElementById("object_omPriming").value,
            bindingMedia:document.getElementById("object_omBindingMedia").value,
            varnish:document.getElementById("object_omVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_omStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_omBrief").value,
              comments:document.getElementById("object_omComments").value,
              sources:document.getElementById("object_omSources").value,
              caption:document.getElementById("object_omCaption").value,
            },
            files:{
              omFiles1:document.getElementById("omFiles1").value,
              omFiles1_id:document.getElementById("omFiles1_id").value,
              omFiles2:document.getElementById("omFiles2").value,
              omFiles2_id:document.getElementById("omFiles2_id").value,
              omFiles3:document.getElementById("omFiles3").value,
              omFiles3_id:document.getElementById("omFiles3_id").value,
              omFiles4:document.getElementById("omFiles4").value,
              omFiles4_id:document.getElementById("omFiles4_id").value,
              omFiles5:document.getElementById("omFiles5").value,
              omFiles5_id:document.getElementById("omFiles5_id").value,
            }
        }

        var omDetails = omMajority;

      } else {

        var omPigment = {
            experimentalParameters:document.getElementById("object_omExperimental").value,
            elements:document.getElementById("object_omElements").value,
            quantification:document.getElementById("object_omQuantification").value,
            formulae:document.getElementById("object_omFormulae").value,
            influence:document.getElementById("object_omInfluence").value,
            colorValues:document.getElementById("object_omColorValues").value,
            bands:document.getElementById("object_omBands").value,
            notes:{
              comments:document.getElementById("object_omComments").value,
              caption:document.getElementById("object_omCaption").value,
            },
            files:{
              omFiles1:document.getElementById("omFiles1").value,
              omFiles1_id:document.getElementById("omFiles1_id").value,
              omFiles2:document.getElementById("omFiles2").value,
              omFiles2_id:document.getElementById("omFiles2_id").value,
              omFiles3:document.getElementById("omFiles3").value,
              omFiles3_id:document.getElementById("omFiles3_id").value,
              omFiles4:document.getElementById("omFiles4").value,
              omFiles4_id:document.getElementById("omFiles4_id").value,
              omFiles5:document.getElementById("omFiles5").value,
              omFiles5_id:document.getElementById("omFiles5_id").value,
            }
        }

        var omDetails = omPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#pige').is(':checked')){

      var pigeDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var pigeMajority = {
            experimentalParameters:document.getElementById("object_pigeExperimental").value,
            elements:document.getElementById("object_pigeElements").value,
            formulae:document.getElementById("object_pigeFormulae").value,
            pigmentsDyes:document.getElementById("object_pigePigmentsDyes").value,
            priming:document.getElementById("object_pigePriming").value,
            bindingMedia:document.getElementById("object_pigeBindingMedia").value,
            varnish:document.getElementById("object_pigeVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_pigeStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_pigeBrief").value,
              comments:document.getElementById("object_pigeComments").value,
              sources:document.getElementById("object_pigeSources").value,
              caption:document.getElementById("object_pigeCaption").value,
            },
            files:{
              pigeFiles1:document.getElementById("pigeFiles1").value,
              pigeFiles1_id:document.getElementById("pigeFiles1_id").value,
              pigeFiles2:document.getElementById("pigeFiles2").value,
              pigeFiles2_id:document.getElementById("pigeFiles2_id").value,
              pigeFiles3:document.getElementById("pigeFiles3").value,
              pigeFiles3_id:document.getElementById("pigeFiles3_id").value,
              pigeFiles4:document.getElementById("pigeFiles4").value,
              pigeFiles4_id:document.getElementById("pigeFiles4_id").value,
              pigeFiles5:document.getElementById("pigeFiles5").value,
              pigeFiles5_id:document.getElementById("pigeFiles5_id").value,
            }
        }

        var pigeDetails = pigeMajority;

      } else {

        var pigePigment = {
            experimentalParameters:document.getElementById("object_pigeExperimental").value,
            elements:document.getElementById("object_pigeElements").value,
            quantification:document.getElementById("object_pigeQuantification").value,
            formulae:document.getElementById("object_pigeFormulae").value,
            influence:document.getElementById("object_pigeInfluence").value,
            colorValues:document.getElementById("object_pigeColorValues").value,
            bands:document.getElementById("object_pigeBands").value,
            notes:{
              comments:document.getElementById("object_pigeComments").value,
              caption:document.getElementById("object_pigeCaption").value,
            },
            files:{
              pigeFiles1:document.getElementById("pigeFiles1").value,
              pigeFiles1_id:document.getElementById("pigeFiles1_id").value,
              pigeFiles2:document.getElementById("pigeFiles2").value,
              pigeFiles2_id:document.getElementById("pigeFiles2_id").value,
              pigeFiles3:document.getElementById("pigeFiles3").value,
              pigeFiles3_id:document.getElementById("pigeFiles3_id").value,
              pigeFiles4:document.getElementById("pigeFiles4").value,
              pigeFiles4_id:document.getElementById("pigeFiles4_id").value,
              pigeFiles5:document.getElementById("pigeFiles5").value,
              pigeFiles5_id:document.getElementById("pigeFiles5_id").value,
            }
        }

        var pigeDetails = pigePigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#pixe').is(':checked')){

      var pixeDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var pixeMajority = {
            experimentalParameters:document.getElementById("object_pixeExperimental").value,
            elements:document.getElementById("object_pixeElements").value,
            formulae:document.getElementById("object_pixeFormulae").value,
            pigmentsDyes:document.getElementById("object_pixePigmentsDyes").value,
            priming:document.getElementById("object_pixePriming").value,
            bindingMedia:document.getElementById("object_pixeBindingMedia").value,
            varnish:document.getElementById("object_pixeVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_pixeStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_pixeBrief").value,
              comments:document.getElementById("object_pixeComments").value,
              sources:document.getElementById("object_pixeSources").value,
              caption:document.getElementById("object_pixeCaption").value,
            },
            files:{
              pixeFiles1:document.getElementById("pixeFiles1").value,
              pixeFiles1_id:document.getElementById("pixeFiles1_id").value,
              pixeFiles2:document.getElementById("pixeFiles2").value,
              pixeFiles2_id:document.getElementById("pixeFiles2_id").value,
              pixeFiles3:document.getElementById("pixeFiles3").value,
              pixeFiles3_id:document.getElementById("pixeFiles3_id").value,
              pixeFiles4:document.getElementById("pixeFiles4").value,
              pixeFiles4_id:document.getElementById("pixeFiles4_id").value,
              pixeFiles5:document.getElementById("pixeFiles5").value,
              pixeFiles5_id:document.getElementById("pixeFiles5_id").value,
            }
        }

        var pixeDetails = pixeMajority;

      } else {

        var pixePigment = {
            experimentalParameters:document.getElementById("object_pixeExperimental").value,
            elements:document.getElementById("object_pixeElements").value,
            quantification:document.getElementById("object_pixeQuantification").value,
            formulae:document.getElementById("object_pixeFormulae").value,
            influence:document.getElementById("object_pixeInfluence").value,
            colorValues:document.getElementById("object_pixeColorValues").value,
            bands:document.getElementById("object_pixeBands").value,
            notes:{
              comments:document.getElementById("object_pixeComments").value,
              caption:document.getElementById("object_pixeCaption").value,
            },
            files:{
              pixeFiles1:document.getElementById("pixeFiles1").value,
              pixeFiles1_id:document.getElementById("pixeFiles1_id").value,
              pixeFiles2:document.getElementById("pixeFiles2").value,
              pixeFiles2_id:document.getElementById("pixeFiles2_id").value,
              pixeFiles3:document.getElementById("pixeFiles3").value,
              pixeFiles3_id:document.getElementById("pixeFiles3_id").value,
              pixeFiles4:document.getElementById("pixeFiles4").value,
              pixeFiles4_id:document.getElementById("pixeFiles4_id").value,
              pixeFiles5:document.getElementById("pixeFiles5").value,
              pixeFiles5_id:document.getElementById("pixeFiles5_id").value,
            }
        }

        var pixeDetails = pixePigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#plm').is(':checked')){

      var plmDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var plmMajority = {
            experimentalParameters:document.getElementById("object_plmExperimental").value,
            elements:document.getElementById("object_plmElements").value,
            formulae:document.getElementById("object_plmFormulae").value,
            pigmentsDyes:document.getElementById("object_plmPigmentsDyes").value,
            priming:document.getElementById("object_plmPriming").value,
            bindingMedia:document.getElementById("object_plmBindingMedia").value,
            varnish:document.getElementById("object_plmVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_plmStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_plmBrief").value,
              comments:document.getElementById("object_plmComments").value,
              sources:document.getElementById("object_plmSources").value,
              caption:document.getElementById("object_plmCaption").value,
            },
            files:{
              plmFiles1:document.getElementById("plmFiles1").value,
              plmFiles1_id:document.getElementById("plmFiles1_id").value,
              plmFiles2:document.getElementById("plmFiles2").value,
              plmFiles2_id:document.getElementById("plmFiles2_id").value,
              plmFiles3:document.getElementById("plmFiles3").value,
              plmFiles3_id:document.getElementById("plmFiles3_id").value,
              plmFiles4:document.getElementById("plmFiles4").value,
              plmFiles4_id:document.getElementById("plmFiles4_id").value,
              plmFiles5:document.getElementById("plmFiles5").value,
              plmFiles5_id:document.getElementById("plmFiles5_id").value,
            }
        }

        var plmDetails = plmMajority;

      } else {

        var plmPigment = {
            experimentalParameters:document.getElementById("object_plmExperimental").value,
            elements:document.getElementById("object_plmElements").value,
            quantification:document.getElementById("object_plmQuantification").value,
            formulae:document.getElementById("object_plmFormulae").value,
            influence:document.getElementById("object_plmInfluence").value,
            colorValues:document.getElementById("object_plmColorValues").value,
            bands:document.getElementById("object_plmBands").value,
            notes:{
              comments:document.getElementById("object_plmComments").value,
              caption:document.getElementById("object_plmCaption").value,
            },
            files:{
              plmFiles1:document.getElementById("plmFiles1").value,
              plmFiles1_id:document.getElementById("plmFiles1_id").value,
              plmFiles2:document.getElementById("plmFiles2").value,
              plmFiles2_id:document.getElementById("plmFiles2_id").value,
              plmFiles3:document.getElementById("plmFiles3").value,
              plmFiles3_id:document.getElementById("plmFiles3_id").value,
              plmFiles4:document.getElementById("plmFiles4").value,
              plmFiles4_id:document.getElementById("plmFiles4_id").value,
              plmFiles5:document.getElementById("plmFiles5").value,
              plmFiles5_id:document.getElementById("plmFiles5_id").value,
            }
        }

        var plmDetails = plmPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#rbs').is(':checked')){

      var rbsDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var rbsMajority = {
            experimentalParameters:document.getElementById("object_rbsExperimental").value,
            elements:document.getElementById("object_rbsElements").value,
            formulae:document.getElementById("object_rbsFormulae").value,
            pigmentsDyes:document.getElementById("object_rbsPigmentsDyes").value,
            priming:document.getElementById("object_rbsPriming").value,
            bindingMedia:document.getElementById("object_rbsBindingMedia").value,
            varnish:document.getElementById("object_rbsVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_rbsStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_rbsBrief").value,
              comments:document.getElementById("object_rbsComments").value,
              sources:document.getElementById("object_rbsSources").value,
              caption:document.getElementById("object_rbsCaption").value,
            },
            files:{
              rbsFiles1:document.getElementById("rbsFiles1").value,
              rbsFiles1_id:document.getElementById("rbsFiles1_id").value,
              rbsFiles2:document.getElementById("rbsFiles2").value,
              rbsFiles2_id:document.getElementById("rbsFiles2_id").value,
              rbsFiles3:document.getElementById("rbsFiles3").value,
              rbsFiles3_id:document.getElementById("rbsFiles3_id").value,
              rbsFiles4:document.getElementById("rbsFiles4").value,
              rbsFiles4_id:document.getElementById("rbsFiles4_id").value,
              rbsFiles5:document.getElementById("rbsFiles5").value,
              rbsFiles5_id:document.getElementById("rbsFiles5_id").value,
            }
        }

        var rbsDetails = rbsMajority;

      } else {

        var rbsPigment = {
            experimentalParameters:document.getElementById("object_rbsExperimental").value,
            elements:document.getElementById("object_rbsElements").value,
            quantification:document.getElementById("object_rbsQuantification").value,
            formulae:document.getElementById("object_rbsFormulae").value,
            influence:document.getElementById("object_rbsInfluence").value,
            colorValues:document.getElementById("object_rbsColorValues").value,
            bands:document.getElementById("object_rbsBands").value,
            notes:{
              comments:document.getElementById("object_rbsComments").value,
              caption:document.getElementById("object_rbsCaption").value,
            },
            files:{
              rbsFiles1:document.getElementById("rbsFiles1").value,
              rbsFiles1_id:document.getElementById("rbsFiles1_id").value,
              rbsFiles2:document.getElementById("rbsFiles2").value,
              rbsFiles2_id:document.getElementById("rbsFiles2_id").value,
              rbsFiles3:document.getElementById("rbsFiles3").value,
              rbsFiles3_id:document.getElementById("rbsFiles3_id").value,
              rbsFiles4:document.getElementById("rbsFiles4").value,
              rbsFiles4_id:document.getElementById("rbsFiles4_id").value,
              rbsFiles5:document.getElementById("rbsFiles5").value,
              rbsFiles5_id:document.getElementById("rbsFiles5_id").value,
            }
        }

        var rbsDetails = rbsPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#rs').is(':checked')){

      var rsDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var rsMajority = {
            experimentalParameters:document.getElementById("object_rsExperimental").value,
            elements:document.getElementById("object_rsElements").value,
            formulae:document.getElementById("object_rsFormulae").value,
            pigmentsDyes:document.getElementById("object_rsPigmentsDyes").value,
            priming:document.getElementById("object_rsPriming").value,
            bindingMedia:document.getElementById("object_rsBindingMedia").value,
            varnish:document.getElementById("object_rsVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_rsStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_rsBrief").value,
              comments:document.getElementById("object_rsComments").value,
              sources:document.getElementById("object_rsSources").value,
              caption:document.getElementById("object_rsCaption").value,
            },
            files:{
              rsFiles1:document.getElementById("rsFiles1").value,
              rsFiles1_id:document.getElementById("rsFiles1_id").value,
              rsFiles2:document.getElementById("rsFiles2").value,
              rsFiles2_id:document.getElementById("rsFiles2_id").value,
              rsFiles3:document.getElementById("rsFiles3").value,
              rsFiles3_id:document.getElementById("rsFiles3_id").value,
              rsFiles4:document.getElementById("rsFiles4").value,
              rsFiles4_id:document.getElementById("rsFiles4_id").value,
              rsFiles5:document.getElementById("rsFiles5").value,
              rsFiles5_id:document.getElementById("rsFiles5_id").value,
            }
        }

        var rsDetails = rsMajority;

      } else {

        var rsPigment = {
            experimentalParameters:document.getElementById("object_rsExperimental").value,
            elements:document.getElementById("object_rsElements").value,
            quantification:document.getElementById("object_rsQuantification").value,
            formulae:document.getElementById("object_rsFormulae").value,
            influence:document.getElementById("object_rsInfluence").value,
            colorValues:document.getElementById("object_rsColorValues").value,
            bands:document.getElementById("object_rsBands").value,
            notes:{
              comments:document.getElementById("object_rsComments").value,
              caption:document.getElementById("object_rsCaption").value,
            },
            files:{
              rsFiles1:document.getElementById("rsFiles1").value,
              rsFiles1_id:document.getElementById("rsFiles1_id").value,
              rsFiles2:document.getElementById("rsFiles2").value,
              rsFiles2_id:document.getElementById("rsFiles2_id").value,
              rsFiles3:document.getElementById("rsFiles3").value,
              rsFiles3_id:document.getElementById("rsFiles3_id").value,
              rsFiles4:document.getElementById("rsFiles4").value,
              rsFiles4_id:document.getElementById("rsFiles4_id").value,
              rsFiles5:document.getElementById("rsFiles5").value,
              rsFiles5_id:document.getElementById("rsFiles5_id").value,
            }
        }

        var rsDetails = rsPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#scanning').is(':checked')){

      var scanningDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var scanningMajority = {
            experimentalParameters:document.getElementById("object_scanningExperimental").value,
            elements:document.getElementById("object_scanningElements").value,
            formulae:document.getElementById("object_scanningFormulae").value,
            pigmentsDyes:document.getElementById("object_scanningPigmentsDyes").value,
            priming:document.getElementById("object_scanningPriming").value,
            bindingMedia:document.getElementById("object_scanningBindingMedia").value,
            varnish:document.getElementById("object_scanningVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_scanningStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_scanningBrief").value,
              comments:document.getElementById("object_scanningComments").value,
              sources:document.getElementById("object_scanningSources").value,
              caption:document.getElementById("object_scanningCaption").value,
            },
            files:{
              scanningFiles1:document.getElementById("scanningFiles1").value,
              scanningFiles1_id:document.getElementById("scanningFiles1_id").value,
              scanningFiles2:document.getElementById("scanningFiles2").value,
              scanningFiles2_id:document.getElementById("scanningFiles2_id").value,
              scanningFiles3:document.getElementById("scanningFiles3").value,
              scanningFiles3_id:document.getElementById("scanningFiles3_id").value,
              scanningFiles4:document.getElementById("scanningFiles4").value,
              scanningFiles4_id:document.getElementById("scanningFiles4_id").value,
              scanningFiles5:document.getElementById("scanningFiles5").value,
              scanningFiles5_id:document.getElementById("scanningFiles5_id").value,
            }
        }

        var scanningDetails = scanningMajority;

      } else {

        var scanningPigment = {
            experimentalParameters:document.getElementById("object_scanningExperimental").value,
            elements:document.getElementById("object_scanningElements").value,
            quantification:document.getElementById("object_scanningQuantification").value,
            formulae:document.getElementById("object_scanningFormulae").value,
            influence:document.getElementById("object_scanningInfluence").value,
            colorValues:document.getElementById("object_scanningColorValues").value,
            bands:document.getElementById("object_scanningBands").value,
            notes:{
              comments:document.getElementById("object_scanningComments").value,
              caption:document.getElementById("object_scanningCaption").value,
            },
            files:{
              scanningFiles1:document.getElementById("scanningFiles1").value,
              scanningFiles1_id:document.getElementById("scanningFiles1_id").value,
              scanningFiles2:document.getElementById("scanningFiles2").value,
              scanningFiles2_id:document.getElementById("scanningFiles2_id").value,
              scanningFiles3:document.getElementById("scanningFiles3").value,
              scanningFiles3_id:document.getElementById("scanningFiles3_id").value,
              scanningFiles4:document.getElementById("scanningFiles4").value,
              scanningFiles4_id:document.getElementById("scanningFiles4_id").value,
              scanningFiles5:document.getElementById("scanningFiles5").value,
              scanningFiles5_id:document.getElementById("scanningFiles5_id").value,
            }
        }

        var scanningDetails = scanningPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#semSemEdx').is(':checked')){

      var semSemEdxDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var semSemEdxMajority = {
            experimentalParameters:document.getElementById("object_semSemEdxExperimental").value,
            elements:document.getElementById("object_semSemEdxElements").value,
            formulae:document.getElementById("object_semSemEdxFormulae").value,
            pigmentsDyes:document.getElementById("object_semSemEdxPigmentsDyes").value,
            priming:document.getElementById("object_semSemEdxPriming").value,
            bindingMedia:document.getElementById("object_semSemEdxBindingMedia").value,
            varnish:document.getElementById("object_semSemEdxVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_semSemEdxStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_semSemEdxBrief").value,
              comments:document.getElementById("object_semSemEdxComments").value,
              sources:document.getElementById("object_semSemEdxSources").value,
              caption:document.getElementById("object_semSemEdxCaption").value,
            },
            files:{
              semSemEdxFiles1:document.getElementById("semSemEdxFiles1").value,
              semSemEdxFiles1_id:document.getElementById("semSemEdxFiles1_id").value,
              semSemEdxFiles2:document.getElementById("semSemEdxFiles2").value,
              semSemEdxFiles2_id:document.getElementById("semSemEdxFiles2_id").value,
              semSemEdxFiles3:document.getElementById("semSemEdxFiles3").value,
              semSemEdxFiles3_id:document.getElementById("semSemEdxFiles3_id").value,
              semSemEdxFiles4:document.getElementById("semSemEdxFiles4").value,
              semSemEdxFiles4_id:document.getElementById("semSemEdxFiles4_id").value,
              semSemEdxFiles5:document.getElementById("semSemEdxFiles5").value,
              semSemEdxFiles5_id:document.getElementById("semSemEdxFiles5_id").value,
            }
        }

        var semSemEdxDetails = semSemEdxMajority;

      } else {

        var semSemEdxPigment = {
            experimentalParameters:document.getElementById("object_semSemEdxExperimental").value,
            elements:document.getElementById("object_semSemEdxElements").value,
            quantification:document.getElementById("object_semSemEdxQuantification").value,
            formulae:document.getElementById("object_semSemEdxFormulae").value,
            influence:document.getElementById("object_semSemEdxInfluence").value,
            colorValues:document.getElementById("object_semSemEdxColorValues").value,
            bands:document.getElementById("object_semSemEdxBands").value,
            notes:{
              comments:document.getElementById("object_semSemEdxComments").value,
              caption:document.getElementById("object_semSemEdxCaption").value,
            },
            files:{
              semSemEdxFiles1:document.getElementById("semSemEdxFiles1").value,
              semSemEdxFiles1_id:document.getElementById("semSemEdxFiles1_id").value,
              semSemEdxFiles2:document.getElementById("semSemEdxFiles2").value,
              semSemEdxFiles2_id:document.getElementById("semSemEdxFiles2_id").value,
              semSemEdxFiles3:document.getElementById("semSemEdxFiles3").value,
              semSemEdxFiles3_id:document.getElementById("semSemEdxFiles3_id").value,
              semSemEdxFiles4:document.getElementById("semSemEdxFiles4").value,
              semSemEdxFiles4_id:document.getElementById("semSemEdxFiles4_id").value,
              semSemEdxFiles5:document.getElementById("semSemEdxFiles5").value,
              semSemEdxFiles5_id:document.getElementById("semSemEdxFiles5_id").value,
            }
        }

        var semSemEdxDetails = semSemEdxPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#synchrotron').is(':checked')){

      var synchrotronDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var synchrotronMajority = {
            experimentalParameters:document.getElementById("object_synchrotronExperimental").value,
            elements:document.getElementById("object_synchrotronElements").value,
            formulae:document.getElementById("object_synchrotronFormulae").value,
            pigmentsDyes:document.getElementById("object_synchrotronPigmentsDyes").value,
            priming:document.getElementById("object_synchrotronPriming").value,
            bindingMedia:document.getElementById("object_synchrotronBindingMedia").value,
            varnish:document.getElementById("object_synchrotronVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_synchrotronStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_synchrotronBrief").value,
              comments:document.getElementById("object_synchrotronComments").value,
              sources:document.getElementById("object_synchrotronSources").value,
              caption:document.getElementById("object_synchrotronCaption").value,
            },
            files:{
              synchrotronFiles1:document.getElementById("synchrotronFiles1").value,
              synchrotronFiles1_id:document.getElementById("synchrotronFiles1_id").value,
              synchrotronFiles2:document.getElementById("synchrotronFiles2").value,
              synchrotronFiles2_id:document.getElementById("synchrotronFiles2_id").value,
              synchrotronFiles3:document.getElementById("synchrotronFiles3").value,
              synchrotronFiles3_id:document.getElementById("synchrotronFiles3_id").value,
              synchrotronFiles4:document.getElementById("synchrotronFiles4").value,
              synchrotronFiles4_id:document.getElementById("synchrotronFiles4_id").value,
              synchrotronFiles5:document.getElementById("synchrotronFiles5").value,
              synchrotronFiles5_id:document.getElementById("synchrotronFiles5_id").value,
            }
        }

        var synchrotronDetails = synchrotronMajority;

      } else {

        var synchrotronPigment = {
            experimentalParameters:document.getElementById("object_synchrotronExperimental").value,
            elements:document.getElementById("object_synchrotronElements").value,
            quantification:document.getElementById("object_synchrotronQuantification").value,
            formulae:document.getElementById("object_synchrotronFormulae").value,
            influence:document.getElementById("object_synchrotronInfluence").value,
            colorValues:document.getElementById("object_synchrotronColorValues").value,
            bands:document.getElementById("object_synchrotronBands").value,
            notes:{
              comments:document.getElementById("object_synchrotronComments").value,
              caption:document.getElementById("object_synchrotronCaption").value,
            },
            files:{
              synchrotronFiles1:document.getElementById("synchrotronFiles1").value,
              synchrotronFiles1_id:document.getElementById("synchrotronFiles1_id").value,
              synchrotronFiles2:document.getElementById("synchrotronFiles2").value,
              synchrotronFiles2_id:document.getElementById("synchrotronFiles2_id").value,
              synchrotronFiles3:document.getElementById("synchrotronFiles3").value,
              synchrotronFiles3_id:document.getElementById("synchrotronFiles3_id").value,
              synchrotronFiles4:document.getElementById("synchrotronFiles4").value,
              synchrotronFiles4_id:document.getElementById("synchrotronFiles4_id").value,
              synchrotronFiles5:document.getElementById("synchrotronFiles5").value,
              synchrotronFiles5_id:document.getElementById("synchrotronFiles5_id").value,
            }
        }

        var synchrotronDetails = synchrotronPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#tem').is(':checked')){

      var temDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var temMajority = {
            experimentalParameters:document.getElementById("object_temExperimental").value,
            elements:document.getElementById("object_temElements").value,
            formulae:document.getElementById("object_temFormulae").value,
            pigmentsDyes:document.getElementById("object_temPigmentsDyes").value,
            priming:document.getElementById("object_temPriming").value,
            bindingMedia:document.getElementById("object_temBindingMedia").value,
            varnish:document.getElementById("object_temVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_temStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_temBrief").value,
              comments:document.getElementById("object_temComments").value,
              sources:document.getElementById("object_temSources").value,
              caption:document.getElementById("object_temCaption").value,
            },
            files:{
              temFiles1:document.getElementById("temFiles1").value,
              temFiles1_id:document.getElementById("temFiles1_id").value,
              temFiles2:document.getElementById("temFiles2").value,
              temFiles2_id:document.getElementById("temFiles2_id").value,
              temFiles3:document.getElementById("temFiles3").value,
              temFiles3_id:document.getElementById("temFiles3_id").value,
              temFiles4:document.getElementById("temFiles4").value,
              temFiles4_id:document.getElementById("temFiles4_id").value,
              temFiles5:document.getElementById("temFiles5").value,
              temFiles5_id:document.getElementById("temFiles5_id").value,
            }
        }

        var temDetails = temMajority;

      } else {

        var temPigment = {
            experimentalParameters:document.getElementById("object_temExperimental").value,
            elements:document.getElementById("object_temElements").value,
            quantification:document.getElementById("object_temQuantification").value,
            formulae:document.getElementById("object_temFormulae").value,
            influence:document.getElementById("object_temInfluence").value,
            colorValues:document.getElementById("object_temColorValues").value,
            bands:document.getElementById("object_temBands").value,
            notes:{
              comments:document.getElementById("object_temComments").value,
              caption:document.getElementById("object_temCaption").value,
            },
            files:{
              temFiles1:document.getElementById("temFiles1").value,
              temFiles1_id:document.getElementById("temFiles1_id").value,
              temFiles2:document.getElementById("temFiles2").value,
              temFiles2_id:document.getElementById("temFiles2_id").value,
              temFiles3:document.getElementById("temFiles3").value,
              temFiles3_id:document.getElementById("temFiles3_id").value,
              temFiles4:document.getElementById("temFiles4").value,
              temFiles4_id:document.getElementById("temFiles4_id").value,
              temFiles5:document.getElementById("temFiles5").value,
              temFiles5_id:document.getElementById("temFiles5_id").value,
            }
        }

        var temDetails = temPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#tl').is(':checked')){

      var tlDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var tlMajority = {
            experimentalParameters:document.getElementById("object_tlExperimental").value,
            elements:document.getElementById("object_tlElements").value,
            formulae:document.getElementById("object_tlFormulae").value,
            pigmentsDyes:document.getElementById("object_tlPigmentsDyes").value,
            priming:document.getElementById("object_tlPriming").value,
            bindingMedia:document.getElementById("object_tlBindingMedia").value,
            varnish:document.getElementById("object_tlVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_tlStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_tlBrief").value,
              comments:document.getElementById("object_tlComments").value,
              sources:document.getElementById("object_tlSources").value,
              caption:document.getElementById("object_tlCaption").value,
            },
            files:{
              tlFiles1:document.getElementById("tlFiles1").value,
              tlFiles1_id:document.getElementById("tlFiles1_id").value,
              tlFiles2:document.getElementById("tlFiles2").value,
              tlFiles2_id:document.getElementById("tlFiles2_id").value,
              tlFiles3:document.getElementById("tlFiles3").value,
              tlFiles3_id:document.getElementById("tlFiles3_id").value,
              tlFiles4:document.getElementById("tlFiles4").value,
              tlFiles4_id:document.getElementById("tlFiles4_id").value,
              tlFiles5:document.getElementById("tlFiles5").value,
              tlFiles5_id:document.getElementById("tlFiles5_id").value,
            }
        }

        var tlDetails = tlMajority;

      } else {

        var tlPigment = {
            experimentalParameters:document.getElementById("object_tlExperimental").value,
            elements:document.getElementById("object_tlElements").value,
            quantification:document.getElementById("object_tlQuantification").value,
            formulae:document.getElementById("object_tlFormulae").value,
            influence:document.getElementById("object_tlInfluence").value,
            colorValues:document.getElementById("object_tlColorValues").value,
            bands:document.getElementById("object_tlBands").value,
            notes:{
              comments:document.getElementById("object_tlComments").value,
              caption:document.getElementById("object_tlCaption").value,
            },
            files:{
              tlFiles1:document.getElementById("tlFiles1").value,
              tlFiles1_id:document.getElementById("tlFiles1_id").value,
              tlFiles2:document.getElementById("tlFiles2").value,
              tlFiles2_id:document.getElementById("tlFiles2_id").value,
              tlFiles3:document.getElementById("tlFiles3").value,
              tlFiles3_id:document.getElementById("tlFiles3_id").value,
              tlFiles4:document.getElementById("tlFiles4").value,
              tlFiles4_id:document.getElementById("tlFiles4_id").value,
              tlFiles5:document.getElementById("tlFiles5").value,
              tlFiles5_id:document.getElementById("tlFiles5_id").value,
            }
        }

        var tlDetails = tlPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#tlc').is(':checked')){

      var tlcDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var tlcMajority = {
            experimentalParameters:document.getElementById("object_tlcExperimental").value,
            elements:document.getElementById("object_tlcElements").value,
            formulae:document.getElementById("object_tlcFormulae").value,
            pigmentsDyes:document.getElementById("object_tlcPigmentsDyes").value,
            priming:document.getElementById("object_tlcPriming").value,
            bindingMedia:document.getElementById("object_tlcBindingMedia").value,
            varnish:document.getElementById("object_tlcVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_tlcStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_tlcBrief").value,
              comments:document.getElementById("object_tlcComments").value,
              sources:document.getElementById("object_tlcSources").value,
              caption:document.getElementById("object_tlcCaption").value,
            },
            files:{
              tlcFiles1:document.getElementById("tlcFiles1").value,
              tlcFiles1_id:document.getElementById("tlcFiles1_id").value,
              tlcFiles2:document.getElementById("tlcFiles2").value,
              tlcFiles2_id:document.getElementById("tlcFiles2_id").value,
              tlcFiles3:document.getElementById("tlcFiles3").value,
              tlcFiles3_id:document.getElementById("tlcFiles3_id").value,
              tlcFiles4:document.getElementById("tlcFiles4").value,
              tlcFiles4_id:document.getElementById("tlcFiles4_id").value,
              tlcFiles5:document.getElementById("tlcFiles5").value,
              tlcFiles5_id:document.getElementById("tlcFiles5_id").value,
            }
        }

        var tlcDetails = tlcMajority;

      } else {

        var tlcPigment = {
            experimentalParameters:document.getElementById("object_tlcExperimental").value,
            elements:document.getElementById("object_tlcElements").value,
            quantification:document.getElementById("object_tlcQuantification").value,
            formulae:document.getElementById("object_tlcFormulae").value,
            influence:document.getElementById("object_tlcInfluence").value,
            colorValues:document.getElementById("object_tlcColorValues").value,
            bands:document.getElementById("object_tlcBands").value,
            notes:{
              comments:document.getElementById("object_tlcComments").value,
              caption:document.getElementById("object_tlcCaption").value,
            },
            files:{
              tlcFiles1:document.getElementById("tlcFiles1").value,
              tlcFiles1_id:document.getElementById("tlcFiles1_id").value,
              tlcFiles2:document.getElementById("tlcFiles2").value,
              tlcFiles2_id:document.getElementById("tlcFiles2_id").value,
              tlcFiles3:document.getElementById("tlcFiles3").value,
              tlcFiles3_id:document.getElementById("tlcFiles3_id").value,
              tlcFiles4:document.getElementById("tlcFiles4").value,
              tlcFiles4_id:document.getElementById("tlcFiles4_id").value,
              tlcFiles5:document.getElementById("tlcFiles5").value,
              tlcFiles5_id:document.getElementById("tlcFiles5_id").value,
            }
        }

        var tlcDetails = tlcPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#uv_vis').is(':checked')){

      var uv_visDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var uv_visMajority = {
            experimentalParameters:document.getElementById("object_uv_visExperimental").value,
            elements:document.getElementById("object_uv_visElements").value,
            formulae:document.getElementById("object_uv_visFormulae").value,
            pigmentsDyes:document.getElementById("object_uv_visPigmentsDyes").value,
            priming:document.getElementById("object_uv_visPriming").value,
            bindingMedia:document.getElementById("object_uv_visBindingMedia").value,
            varnish:document.getElementById("object_uv_visVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_uv_visStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_uv_visBrief").value,
              comments:document.getElementById("object_uv_visComments").value,
              sources:document.getElementById("object_uv_visSources").value,
              caption:document.getElementById("object_uv_visCaption").value,
            },
            files:{
              uv_visFiles1:document.getElementById("uv_visFiles1").value,
              uv_visFiles1_id:document.getElementById("uv_visFiles1_id").value,
              uv_visFiles2:document.getElementById("uv_visFiles2").value,
              uv_visFiles2_id:document.getElementById("uv_visFiles2_id").value,
              uv_visFiles3:document.getElementById("uv_visFiles3").value,
              uv_visFiles3_id:document.getElementById("uv_visFiles3_id").value,
              uv_visFiles4:document.getElementById("uv_visFiles4").value,
              uv_visFiles4_id:document.getElementById("uv_visFiles4_id").value,
              uv_visFiles5:document.getElementById("uv_visFiles5").value,
              uv_visFiles5_id:document.getElementById("uv_visFiles5_id").value,
            }
        }

        var uv_visDetails = uv_visMajority;

      } else {

        var uv_visPigment = {
            experimentalParameters:document.getElementById("object_uv_visExperimental").value,
            elements:document.getElementById("object_uv_visElements").value,
            quantification:document.getElementById("object_uv_visQuantification").value,
            formulae:document.getElementById("object_uv_visFormulae").value,
            influence:document.getElementById("object_uv_visInfluence").value,
            colorValues:document.getElementById("object_uv_visColorValues").value,
            bands:document.getElementById("object_uv_visBands").value,
            notes:{
              comments:document.getElementById("object_uv_visComments").value,
              caption:document.getElementById("object_uv_visCaption").value,
            },
            files:{
              uv_visFiles1:document.getElementById("uv_visFiles1").value,
              uv_visFiles1_id:document.getElementById("uv_visFiles1_id").value,
              uv_visFiles2:document.getElementById("uv_visFiles2").value,
              uv_visFiles2_id:document.getElementById("uv_visFiles2_id").value,
              uv_visFiles3:document.getElementById("uv_visFiles3").value,
              uv_visFiles3_id:document.getElementById("uv_visFiles3_id").value,
              uv_visFiles4:document.getElementById("uv_visFiles4").value,
              uv_visFiles4_id:document.getElementById("uv_visFiles4_id").value,
              uv_visFiles5:document.getElementById("uv_visFiles5").value,
              uv_visFiles5_id:document.getElementById("uv_visFiles5_id").value,
            }
        }

        var uv_visDetails = uv_visPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#uvf').is(':checked')){

      var uvfDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var uvfMajority = {
            experimentalParameters:document.getElementById("object_uvfExperimental").value,
            elements:document.getElementById("object_uvfElements").value,
            formulae:document.getElementById("object_uvfFormulae").value,
            pigmentsDyes:document.getElementById("object_uvfPigmentsDyes").value,
            priming:document.getElementById("object_uvfPriming").value,
            bindingMedia:document.getElementById("object_uvfBindingMedia").value,
            varnish:document.getElementById("object_uvfVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_uvfStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_uvfBrief").value,
              comments:document.getElementById("object_uvfComments").value,
              sources:document.getElementById("object_uvfSources").value,
              caption:document.getElementById("object_uvfCaption").value,
            },
            files:{
              uvfFiles1:document.getElementById("uvfFiles1").value,
              uvfFiles1_id:document.getElementById("uvfFiles1_id").value,
              uvfFiles2:document.getElementById("uvfFiles2").value,
              uvfFiles2_id:document.getElementById("uvfFiles2_id").value,
              uvfFiles3:document.getElementById("uvfFiles3").value,
              uvfFiles3_id:document.getElementById("uvfFiles3_id").value,
              uvfFiles4:document.getElementById("uvfFiles4").value,
              uvfFiles4_id:document.getElementById("uvfFiles4_id").value,
              uvfFiles5:document.getElementById("uvfFiles5").value,
              uvfFiles5_id:document.getElementById("uvfFiles5_id").value,
            }
        }

        var uvfDetails = uvfMajority;

      } else {

        var uvfPigment = {
            experimentalParameters:document.getElementById("object_uvfExperimental").value,
            elements:document.getElementById("object_uvfElements").value,
            quantification:document.getElementById("object_uvfQuantification").value,
            formulae:document.getElementById("object_uvfFormulae").value,
            influence:document.getElementById("object_uvfInfluence").value,
            colorValues:document.getElementById("object_uvfColorValues").value,
            bands:document.getElementById("object_uvfBands").value,
            notes:{
              comments:document.getElementById("object_uvfComments").value,
              caption:document.getElementById("object_uvfCaption").value,
            },
            files:{
              uvfFiles1:document.getElementById("uvfFiles1").value,
              uvfFiles1_id:document.getElementById("uvfFiles1_id").value,
              uvfFiles2:document.getElementById("uvfFiles2").value,
              uvfFiles2_id:document.getElementById("uvfFiles2_id").value,
              uvfFiles3:document.getElementById("uvfFiles3").value,
              uvfFiles3_id:document.getElementById("uvfFiles3_id").value,
              uvfFiles4:document.getElementById("uvfFiles4").value,
              uvfFiles4_id:document.getElementById("uvfFiles4_id").value,
              uvfFiles5:document.getElementById("uvfFiles5").value,
              uvfFiles5_id:document.getElementById("uvfFiles5_id").value,
            }
        }

        var uvfDetails = uvfPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#vis').is(':checked')){

      var visDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var visMajority = {
            experimentalParameters:document.getElementById("object_visExperimental").value,
            elements:document.getElementById("object_visElements").value,
            formulae:document.getElementById("object_visFormulae").value,
            pigmentsDyes:document.getElementById("object_visPigmentsDyes").value,
            priming:document.getElementById("object_visPriming").value,
            bindingMedia:document.getElementById("object_visBindingMedia").value,
            varnish:document.getElementById("object_visVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_visStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_visBrief").value,
              comments:document.getElementById("object_visComments").value,
              sources:document.getElementById("object_visSources").value,
              caption:document.getElementById("object_visCaption").value,
            },
            files:{
              visFiles1:document.getElementById("visFiles1").value,
              visFiles1_id:document.getElementById("visFiles1_id").value,
              visFiles2:document.getElementById("visFiles2").value,
              visFiles2_id:document.getElementById("visFiles2_id").value,
              visFiles3:document.getElementById("visFiles3").value,
              visFiles3_id:document.getElementById("visFiles3_id").value,
              visFiles4:document.getElementById("visFiles4").value,
              visFiles4_id:document.getElementById("visFiles4_id").value,
              visFiles5:document.getElementById("visFiles5").value,
              visFiles5_id:document.getElementById("visFiles5_id").value,
            }
        }

        var visDetails = visMajority;

      } else {

        var visPigment = {
            experimentalParameters:document.getElementById("object_visExperimental").value,
            elements:document.getElementById("object_visElements").value,
            quantification:document.getElementById("object_visQuantification").value,
            formulae:document.getElementById("object_visFormulae").value,
            influence:document.getElementById("object_visInfluence").value,
            colorValues:document.getElementById("object_visColorValues").value,
            bands:document.getElementById("object_visBands").value,
            notes:{
              comments:document.getElementById("object_visComments").value,
              caption:document.getElementById("object_visCaption").value,
            },
            files:{
              visFiles1:document.getElementById("visFiles1").value,
              visFiles1_id:document.getElementById("visFiles1_id").value,
              visFiles2:document.getElementById("visFiles2").value,
              visFiles2_id:document.getElementById("visFiles2_id").value,
              visFiles3:document.getElementById("visFiles3").value,
              visFiles3_id:document.getElementById("visFiles3_id").value,
              visFiles4:document.getElementById("visFiles4").value,
              visFiles4_id:document.getElementById("visFiles4_id").value,
              visFiles5:document.getElementById("visFiles5").value,
              visFiles5_id:document.getElementById("visFiles5_id").value,
            }
        }

        var visDetails = visPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#xrd').is(':checked')){

      var xrdDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var xrdMajority = {
            experimentalParameters:document.getElementById("object_xrdExperimental").value,
            elements:document.getElementById("object_xrdElements").value,
            formulae:document.getElementById("object_xrdFormulae").value,
            pigmentsDyes:document.getElementById("object_xrdPigmentsDyes").value,
            priming:document.getElementById("object_xrdPriming").value,
            bindingMedia:document.getElementById("object_xrdBindingMedia").value,
            varnish:document.getElementById("object_xrdVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_xrdStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_xrdBrief").value,
              comments:document.getElementById("object_xrdComments").value,
              sources:document.getElementById("object_xrdSources").value,
              caption:document.getElementById("object_xrdCaption").value,
            },
            files:{
              xrdFiles1:document.getElementById("xrdFiles1").value,
              xrdFiles1_id:document.getElementById("xrdFiles1_id").value,
              xrdFiles2:document.getElementById("xrdFiles2").value,
              xrdFiles2_id:document.getElementById("xrdFiles2_id").value,
              xrdFiles3:document.getElementById("xrdFiles3").value,
              xrdFiles3_id:document.getElementById("xrdFiles3_id").value,
              xrdFiles4:document.getElementById("xrdFiles4").value,
              xrdFiles4_id:document.getElementById("xrdFiles4_id").value,
              xrdFiles5:document.getElementById("xrdFiles5").value,
              xrdFiles5_id:document.getElementById("xrdFiles5_id").value,
            }
        }

        var xrdDetails = xrdMajority;

      } else {

        var xrdPigment = {
            experimentalParameters:document.getElementById("object_xrdExperimental").value,
            elements:document.getElementById("object_xrdElements").value,
            quantification:document.getElementById("object_xrdQuantification").value,
            formulae:document.getElementById("object_xrdFormulae").value,
            influence:document.getElementById("object_xrdInfluence").value,
            colorValues:document.getElementById("object_xrdColorValues").value,
            bands:document.getElementById("object_xrdBands").value,
            notes:{
              comments:document.getElementById("object_xrdComments").value,
              caption:document.getElementById("object_xrdCaption").value,
            },
            files:{
              xrdFiles1:document.getElementById("xrdFiles1").value,
              xrdFiles1_id:document.getElementById("xrdFiles1_id").value,
              xrdFiles2:document.getElementById("xrdFiles2").value,
              xrdFiles2_id:document.getElementById("xrdFiles2_id").value,
              xrdFiles3:document.getElementById("xrdFiles3").value,
              xrdFiles3_id:document.getElementById("xrdFiles3_id").value,
              xrdFiles4:document.getElementById("xrdFiles4").value,
              xrdFiles4_id:document.getElementById("xrdFiles4_id").value,
              xrdFiles5:document.getElementById("xrdFiles5").value,
              xrdFiles5_id:document.getElementById("xrdFiles5_id").value,
            }
        }

        var xrdDetails = xrdPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#xrf').is(':checked')){

      var xrfDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var xrfMajority = {
            experimentalParameters:document.getElementById("object_xrfExperimental").value,
            elements:document.getElementById("object_xrfElements").value,
            formulae:document.getElementById("object_xrfFormulae").value,
            pigmentsDyes:document.getElementById("object_xrfPigmentsDyes").value,
            priming:document.getElementById("object_xrfPriming").value,
            bindingMedia:document.getElementById("object_xrfBindingMedia").value,
            varnish:document.getElementById("object_xrfVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_xrfStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_xrfBrief").value,
              comments:document.getElementById("object_xrfComments").value,
              sources:document.getElementById("object_xrfSources").value,
              caption:document.getElementById("object_xrfCaption").value,
            },
            files:{
              xrfFiles1:document.getElementById("xrfFiles1").value,
              xrfFiles1_id:document.getElementById("xrfFiles1_id").value,
              xrfFiles2:document.getElementById("xrfFiles2").value,
              xrfFiles2_id:document.getElementById("xrfFiles2_id").value,
              xrfFiles3:document.getElementById("xrfFiles3").value,
              xrfFiles3_id:document.getElementById("xrfFiles3_id").value,
              xrfFiles4:document.getElementById("xrfFiles4").value,
              xrfFiles4_id:document.getElementById("xrfFiles4_id").value,
              xrfFiles5:document.getElementById("xrfFiles5").value,
              xrfFiles5_id:document.getElementById("xrfFiles5_id").value,
            }
        }

        var xrfDetails = xrfMajority;

      } else {

        var xrfPigment = {
            experimentalParameters:document.getElementById("object_xrfExperimental").value,
            elements:document.getElementById("object_xrfElements").value,
            quantification:document.getElementById("object_xrfQuantification").value,
            formulae:document.getElementById("object_xrfFormulae").value,
            influence:document.getElementById("object_xrfInfluence").value,
            colorValues:document.getElementById("object_xrfColorValues").value,
            bands:document.getElementById("object_xrfBands").value,
            notes:{
              comments:document.getElementById("object_xrfComments").value,
              caption:document.getElementById("object_xrfCaption").value,
            },
            files:{
              xrfFiles1:document.getElementById("xrfFiles1").value,
              xrfFiles1_id:document.getElementById("xrfFiles1_id").value,
              xrfFiles2:document.getElementById("xrfFiles2").value,
              xrfFiles2_id:document.getElementById("xrfFiles2_id").value,
              xrfFiles3:document.getElementById("xrfFiles3").value,
              xrfFiles3_id:document.getElementById("xrfFiles3_id").value,
              xrfFiles4:document.getElementById("xrfFiles4").value,
              xrfFiles4_id:document.getElementById("xrfFiles4_id").value,
              xrfFiles5:document.getElementById("xrfFiles5").value,
              xrfFiles5_id:document.getElementById("xrfFiles5_id").value,
            }
        }

        var xrfDetails = xrfPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    $(':input').removeAttr('placeholder');
    if(!$('#xrr').is(':checked')){

      var xrrDetails = false;
      
    } else {

      if(!$("#item-pigment-dye-binder").is(":checked")){

        var xrrMajority = {
            experimentalParameters:document.getElementById("object_xrrExperimental").value,
            elements:document.getElementById("object_xrrElements").value,
            formulae:document.getElementById("object_xrrFormulae").value,
            pigmentsDyes:document.getElementById("object_xrrPigmentsDyes").value,
            priming:document.getElementById("object_xrrPriming").value,
            bindingMedia:document.getElementById("object_xrrBindingMedia").value,
            varnish:document.getElementById("object_xrrVarnish").value,
            stretcherSupportStrainer:document.getElementById("object_xrrStretcherSupportStrainer").value,
            notes:{
              brief:document.getElementById("object_xrrBrief").value,
              comments:document.getElementById("object_xrrComments").value,
              sources:document.getElementById("object_xrrSources").value,
              caption:document.getElementById("object_xrrCaption").value,
            },
            files:{
              xrrFiles1:document.getElementById("xrrFiles1").value,
              xrrFiles1_id:document.getElementById("xrrFiles1_id").value,
              xrrFiles2:document.getElementById("xrrFiles2").value,
              xrrFiles2_id:document.getElementById("xrrFiles2_id").value,
              xrrFiles3:document.getElementById("xrrFiles3").value,
              xrrFiles3_id:document.getElementById("xrrFiles3_id").value,
              xrrFiles4:document.getElementById("xrrFiles4").value,
              xrrFiles4_id:document.getElementById("xrrFiles4_id").value,
              xrrFiles5:document.getElementById("xrrFiles5").value,
              xrrFiles5_id:document.getElementById("xrrFiles5_id").value,
            }
        }

        var xrrDetails = xrrMajority;

      } else {

        var xrrPigment = {
            experimentalParameters:document.getElementById("object_xrrExperimental").value,
            elements:document.getElementById("object_xrrElements").value,
            quantification:document.getElementById("object_xrrQuantification").value,
            formulae:document.getElementById("object_xrrFormulae").value,
            influence:document.getElementById("object_xrrInfluence").value,
            colorValues:document.getElementById("object_xrrColorValues").value,
            bands:document.getElementById("object_xrrBands").value,
            notes:{
              comments:document.getElementById("object_xrrComments").value,
              caption:document.getElementById("object_xrrCaption").value,
            },
            files:{
              xrrFiles1:document.getElementById("xrrFiles1").value,
              xrrFiles1_id:document.getElementById("xrrFiles1_id").value,
              xrrFiles2:document.getElementById("xrrFiles2").value,
              xrrFiles2_id:document.getElementById("xrrFiles2_id").value,
              xrrFiles3:document.getElementById("xrrFiles3").value,
              xrrFiles3_id:document.getElementById("xrrFiles3_id").value,
              xrrFiles4:document.getElementById("xrrFiles4").value,
              xrrFiles4_id:document.getElementById("xrrFiles4_id").value,
              xrrFiles5:document.getElementById("xrrFiles5").value,
              xrrFiles5_id:document.getElementById("xrrFiles5_id").value,
            }
        }

        var xrrDetails = xrrPigment;

      }
    }
////////////////////////////////////////////////////////////////////////////////////////
    
///////////////////////////////////////////////////////////////////////
//////
//////                UNIVERSAL OBJECTS
//////
//////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////      USER INFO / DATA INFO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var infoObject = {
      userId:Meteor.user()._id,
      createdAt: Meteor.myFunctions.dateFormat(),
      addedBy:Meteor.user().profile.full_name,
      last_edit: Meteor.myFunctions.dateFormat(),
      editedBy:Meteor.user().profile.full_name,
      editorId:Meteor.user()._id,
      visible:function(){return $('input[name="material_basic_type"]:checked').val();},
    }

    // normal data object
    if(!$('#item-pigment-dye-binder').is(':checked')){

      var dataObject = {
        basic:{
          front:document.getElementById("img_front").value,
          front_id:document.getElementById("img_front_id").value,
          back:document.getElementById("img_back").value,
          back_id:document.getElementById("img_back_id").value,
          side:document.getElementById("img_side").value,
          side_id:document.getElementById("img_side_id").value,
          signature:document.getElementById("img_signature").value,
          signature_id:document.getElementById("img_signature_id").value,
          basic_files:document.getElementById("basic_files").value,
          basic_files_id:document.getElementById("basic_files_id").value,
        },
        original:{
          photoOne:document.getElementById("photoOne1").value,
          photoOne_id:document.getElementById("photoOne1_id").value,
          photoTwo:document.getElementById("photoTwo1").value,
          photoTwo_id:document.getElementById("photoTwo1_id").value,
          photoThree:document.getElementById("photoThree1").value,
          photoThree_id:document.getElementById("photoThree1_id").value,
          photoFour:document.getElementById("photoFour1").value,
          photoFour_id:document.getElementById("photoFour1_id").value,
          files:document.getElementById("files1").value,
          files_id:document.getElementById("files1_id").value,
        },
        interventions:{
          photoOne:document.getElementById("photoOne2").value,
          photoOne_id:document.getElementById("photoOne2_id").value,
          photoTwo:document.getElementById("photoTwo2").value,
          photoTwo_id:document.getElementById("photoTwo2_id").value,
          photoThree:document.getElementById("photoThree2").value,
          photoThree_id:document.getElementById("photoThree2_id").value,
          photoFour:document.getElementById("photoFour2").value,
          photoFour_id:document.getElementById("photoFour2_id").value,
          files:document.getElementById("files2").value,
          files_id:document.getElementById("files2_id").value,
        },
        restoration:{
          photoOne:document.getElementById("photoOne3").value,
          photoOne_id:document.getElementById("photoOne3_id").value,
          photoTwo:document.getElementById("photoTwo3").value,
          photoTwo_id:document.getElementById("photoTwo3_id").value,
          photoThree:document.getElementById("photoThree3").value,
          photoThree_id:document.getElementById("photoThree3_id").value,
          photoFour:document.getElementById("photoFour3").value,
          photoFour_id:document.getElementById("photoFour3_id").value,
          files:document.getElementById("files3").value,
          files_id:document.getElementById("files3_id").value,
        }
      }
    }

    // intruder data object
    if($('#item-pigment-dye-binder').is(':checked')){

      var dataObject = {
        basic:{
          front:document.getElementById("img_front").value,
          front_id:document.getElementById("img_front_id").value,
          back:document.getElementById("img_back").value,
          back_id:document.getElementById("img_back_id").value,
          side:document.getElementById("img_side").value,
          side_id:document.getElementById("img_side_id").value,
          signature:document.getElementById("img_signature").value,
          signature_id:document.getElementById("img_signature_id").value,
          basic_files:document.getElementById("basic_files").value,
          basic_files_id:document.getElementById("basic_files_id").value,
        },
      }
    }
    // end of intruder data
    
    var methodsObject = {
      methods:{
        aas:aasDetails,
        aes:aesDetails,
        afm:afmDetails,
        analysis:analysisDetails,
        binderFiller:binderFillerDetails,
        c_14:c_14Details,
        colorimetry:colorimetryDetails,
        drms:drmsDetails,
        fors:forsDetails,
        ft_ir:ft_irDetails,
        gc_ms:gc_msDetails,
        gl:glDetails,
        granulometry:granulometryDetails,
        hygroscopic:hygroscopicDetails,
        irpIrrIrfc:irpIrrIrfcDetails,
        libs:libsDetails,
        ol:olDetails,
        om:omDetails,
        pige:pigeDetails,
        pixe:pixeDetails,
        plm:plmDetails,
        rbs:rbsDetails,
        rs:rsDetails,
        scanning:scanningDetails,
        semSemEdx:semSemEdxDetails,
        synchrotron:synchrotronDetails,
        tem:temDetails,
        tl:tlDetails,
        tlc:tlcDetails,
        uv_vis:uv_visDetails,
        uvf:uvfDetails,
        vis:visDetails,
        xrd:xrdDetails,
        xrf:xrfDetails,
        xrr:xrrDetails,
      },
    }
///////////////////////////////////////////////////////////////////////
//////
//////                SELECTIONS OBJECTS
//////
//////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////      PAINTING
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if($('#item_painting').is(':checked')){

    var itemType = $("input[name='type']:checked").val();
    var basicObject = {
      author:document.getElementById("author").value,
      title:document.getElementById("title").value,
      date:document.getElementById("date").value,
      technique:document.getElementById("technique").value,
      dimensions_noFrame:document.getElementById("dimensions_noFrame").value,
      dimensions_frame:document.getElementById("dimensions_frame").value,
      originalOwner:document.getElementById("originalOwner").value,
      currentOwner:document.getElementById("currentOwner").value,
      originalLocation:document.getElementById("originalLocation").value,
      currentLocation:document.getElementById("currentLocation").value,
      inventoryNumber:document.getElementById("inventoryNumber").value,
      authority:document.getElementById("authority").value,
      legalStatus:document.getElementById("legalStatus").value,
      investigated:document.getElementById("methodsTechniques").value,
      notes:{
        projectName:document.getElementById("projectName").value,
        summaryProjects:document.getElementById("summaryProjects").value,
        provenance:document.getElementById("provenanceBasic").value,
        comments:document.getElementById("commentsBasic").value,
      }
    }

    var materialsObject = {
      original:{
        primingGround:document.getElementById("primingGround1").value,
        pigmentsDyes:document.getElementById("pigmentsDyes1").value,
        bindingMedium:document.getElementById("bindingMedium1").value,
        additives:document.getElementById("additives1").value,
        filler:document.getElementById("filler1").value,
        layerVarnish:document.getElementById("layerVarnish1").value,
        underdrawingPentimento:document.getElementById("underdrawingPentimento1").value,
        leafs:document.getElementById("leafs1").value,
        leafsApplication:document.getElementById("leafsApplication1").value,
        periodStyle:document.getElementById("periodStyle1").value,
        stretcher:document.getElementById("stretcher1").value,
        supportStrainer:document.getElementById("supportStrainer1").value,
        support:document.getElementById("support1").value,
        thickness:document.getElementById("thickness1").value,
        piecesJoints:document.getElementById("piecesJoints1").value,
        texture:document.getElementById("texture1").value,
        color:document.getElementById("color1").value,
        manufacturer:document.getElementById("manufacturer1").value,
        wave:document.getElementById("wave1").value,
        constructionAids:document.getElementById("constructionAids1").value,
        decorativeApplications:document.getElementById("decorativeApplications1").value,
        potataGiornata:document.getElementById("potataGiornata1").value,
        relief:document.getElementById("relief1").value,
        plaster:{
          layers:document.getElementById("p_layers1").value,
          composition:document.getElementById("p_composition1").value,
          binderFiller:document.getElementById("p_binderFiller1").value,
        },
        density:{
          weft:document.getElementById("densityWeft1").value,
          warp:document.getElementById("densityWarp1").value,
        },
        thicknessOfThread:{
          weft:document.getElementById("thicknessWeft1").value,
          warp:document.getElementById("thicknessWarp1").value,
        },
        decorativeFrame:{
          periodStyle:document.getElementById("df_periodStyle1").value,
          support:document.getElementById("df_support1").value,
          priming:document.getElementById("df_priming1").value,
          decorativeLayer:document.getElementById("df_decorativeLayer1").value,
          varnish:document.getElementById("df_varnish1").value,
        },
        notes:{
          samples:document.getElementById("samples1").value,
          artHistory:document.getElementById("artHistory1").value,
          sources:document.getElementById("sources1").value,
          comments:document.getElementById("comments1").value,
          figureCaption:document.getElementById("figureCaption1").value,
        },
      },
      interventions:{
        primingGround:document.getElementById("primingGround2").value,
        pigmentsDyes:document.getElementById("pigmentsDyes2").value,
        bindingMedium:document.getElementById("bindingMedium2").value,
        filler:document.getElementById("filler2").value,
        additives:document.getElementById("additives2").value,
        layerVarnish:document.getElementById("layerVarnish2").value,
        leafs:document.getElementById("leafs2").value,
        leafsApplication:document.getElementById("leafsApplication2").value,
        periodStyle:document.getElementById("periodStyle2").value,
        stretcher:document.getElementById("stretcher2").value,
        piecesJoints:document.getElementById("piecesJoints2").value,
        texture:document.getElementById("texture2").value,
        color:document.getElementById("color2").value,
        manufacturer:document.getElementById("manufacturer2").value,
        wave:document.getElementById("wave2").value,
        constructionAids:document.getElementById("constructionAids2").value,
        decorativeApplications:document.getElementById("decorativeApplications2").value,
        potataGiornata:document.getElementById("potataGiornata2").value,
        relief:document.getElementById("relief2").value,
        plaster:{
          layers:document.getElementById("p_layers2").value,
          composition:document.getElementById("p_composition2").value,
          binderFiller:document.getElementById("p_binderFiller2").value,
        },
        density:{
          weft:document.getElementById("densityWeft2").value,
          warp:document.getElementById("densityWarp2").value,
        },
        thicknessOfThread:{
          weft:document.getElementById("thicknessWeft2").value,
          warp:document.getElementById("thicknessWarp2").value,
        },
        decorativeFrame:{
          periodStyle:document.getElementById("df_periodStyle2").value,
          support:document.getElementById("df_support2").value,
          priming:document.getElementById("df_priming2").value,
          decorativeLayer:document.getElementById("df_decorativeLayer2").value,
          varnish:document.getElementById("df_varnish2").value,
        },
        notes:{
          sources:document.getElementById("sources2").value,
          samples:document.getElementById("samples2").value,
          interventions:document.getElementById("interventions2").value,
          comments:document.getElementById("comments2").value,
          figureCaption:document.getElementById("figureCaption2").value,
        },
      },
      restoration:{
        executor:document.getElementById("executor").value,
        responsiblePerson:document.getElementById("responsiblePerson").value,
        investor:document.getElementById("investor").value,
        people:document.getElementById("people").value,
        chronologicalProcess:document.getElementById("chronologicalProcess").value,
        duration:document.getElementById("duration").value,
        notes:{
          comments:document.getElementById("comments3").value,
          figureCaption:document.getElementById("figureCaption3").value,
        },
      }
    }


    // MAIN OBJECT //
    var itemDetails = {
    type:itemType,
    info:infoObject,
    data:dataObject,
    basic:basicObject,
    materials:materialsObject,
    details:methodsObject,
    }

    console.log(itemDetails);

    var itemId = Session.get("itemId");
    // WHAT TO DO IF NEW OR EDIT //
    if (!Session.get("itemId")){
      Meteor.call("insertItem", itemDetails, function(error,result){
        if(!error){ Router.go("/gallery/details/"+result); }});
    } else {
      Meteor.call("updateItem", itemId, itemDetails);
      delete Session.keys.itemId;
      Router.go("/gallery/details/"+itemId);
    }

  } // end of painting object

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////      SCULPTURE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if($('#item-sculpture').is(':checked')){

    var itemType = $("input[name='type']:checked").val();
    var basicObject = {
      author:document.getElementById("author").value,
      title:document.getElementById("title").value,
      date:document.getElementById("date").value,
      technique:document.getElementById("technique").value,
      dimensions_noFrame:document.getElementById("dimensions_noStand").value,
      dimensions_frame:document.getElementById("dimensions_stand").value,
      originalOwner:document.getElementById("originalOwner").value,
      currentOwner:document.getElementById("currentOwner").value,
      originalLocation:document.getElementById("originalLocation").value,
      currentLocation:document.getElementById("currentLocation").value,
      inventoryNumber:document.getElementById("inventoryNumber").value,
      authority:document.getElementById("authority").value,
      legalStatus:document.getElementById("legalStatus").value,
      investigated:document.getElementById("methodsTechniques").value,
      notes:{
        projectName:document.getElementById("projectName").value,
        summaryProjects:document.getElementById("summaryProjects").value,
        provenance:document.getElementById("provenanceBasic").value,
        comments:document.getElementById("commentsBasic").value,
      }
    }

    var materialsObject = {
      original:{
        primingGround:document.getElementById("primingGround1").value,
        pigmentsDyes:document.getElementById("pigmentsDyes1").value,
        bindingMedium:document.getElementById("bindingMedium1").value,
        additives:document.getElementById("additives1").value,
        filler:document.getElementById("filler1").value,
        layerVarnish:document.getElementById("layerVarnish1").value,
        leafs:document.getElementById("leafs1").value,
        leafsApplication:document.getElementById("leafsApplication1").value,
        periodStyle:document.getElementById("periodStyle1").value,
        support:document.getElementById("support1").value,
        piecesJoints:document.getElementById("piecesJoints1").value,
        color:document.getElementById("color1").value,
        notes:{
          samples:document.getElementById("samples1").value,
          artHistory:document.getElementById("artHistory1").value,
          sources:document.getElementById("sources1").value,
          comments:document.getElementById("comments1").value,
          figureCaption:document.getElementById("figureCaption1").value,
        },
      },
      interventions:{
        primingGround:document.getElementById("primingGround2").value,
        pigmentsDyes:document.getElementById("pigmentsDyes2").value,
        bindingMedium:document.getElementById("bindingMedium2").value,
        filler:document.getElementById("filler2").value,
        additives:document.getElementById("additives2").value,
        layerVarnish:document.getElementById("layerVarnish2").value,
        leafs:document.getElementById("leafs2").value,
        leafsApplication:document.getElementById("leafsApplication2").value,
        periodStyle:document.getElementById("periodStyle2").value,
        notes:{
          interventions:document.getElementById("interventionsNotes").value,
          samples:document.getElementById("samples2").value,
          sources:document.getElementById("sources2").value,
          comments:document.getElementById("comments2").value,
          figureCaption:document.getElementById("figureCaption2").value,
        },
      },
      restoration:{
        executor:document.getElementById("executor").value,
        responsiblePerson:document.getElementById("responsiblePerson").value,
        investor:document.getElementById("investor").value,
        people:document.getElementById("people").value,
        chronologicalProcess:document.getElementById("chronologicalProcess").value,
        duration:document.getElementById("duration").value,
        notes:{
          comments:document.getElementById("comments3").value,
          figureCaption:document.getElementById("figureCaption3").value,
          chronologicalProcess:document.getElementById("chronologicalProcess").value,
        },
      }
    }


    // MAIN OBJECT //
    var itemDetails = {
    type:itemType,
    info:infoObject,
    data:dataObject,
    basic:basicObject,
    materials:materialsObject,
    details:methodsObject,
    }

    console.log(itemDetails);

    var itemId = Session.get("itemId");
    // WHAT TO DO IF NEW OR EDIT //
    if (!Session.get("itemId")){
      Meteor.call("insertItem", itemDetails, function(error,result){
        if(!error){ Router.go("/gallery/details/"+result); }});
    } else {
      Meteor.call("updateItem", itemId, itemDetails);
      delete Session.keys.itemId;
      Router.go("/gallery/details/"+itemId);
    }

  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////      OTHER
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if($('#item-architectural-heritage').is(':checked') || $('#item-archival-object').is(':checked') || $('#item-archaeological').is(':checked') || $('#item-other').is(':checked')){

    var itemType = $("input[name='type']:checked").val();
    var basicObject = {
      type:document.getElementById("typeOfObject").value,
      author:document.getElementById("author").value,
      title:document.getElementById("title").value,
      date:document.getElementById("date").value,
      technique:document.getElementById("technique").value,
      otherDimensions:document.getElementById("otherDimensions").value,
      originalOwner:document.getElementById("originalOwner").value,
      currentOwner:document.getElementById("currentOwner").value,
      originalLocation:document.getElementById("originalLocation").value,
      currentLocation:document.getElementById("currentLocation").value,
      inventoryNumber:document.getElementById("inventoryNumber").value,
      authority:document.getElementById("authority").value,
      legalStatus:document.getElementById("legalStatus").value,
      investigated:document.getElementById("methodsTechniques").value,
      notes:{
        projectName:document.getElementById("projectName").value,
        summaryProjects:document.getElementById("summaryProjects").value,
        provenance:document.getElementById("provenanceBasic").value,
        comments:document.getElementById("commentsBasic").value,
      }
    }

    var materialsObject = {
      original:{
        materials:document.getElementById("materialsInvolved1").value,
        primingGround:document.getElementById("primingGround1").value,
        pigmentsDyes:document.getElementById("pigmentsDyes1").value,
        bindingMedium:document.getElementById("bindingMedium1").value,
        additives:document.getElementById("additives1").value,
        filler:document.getElementById("filler1").value,
        layerVarnish:document.getElementById("layerVarnish1").value,
        leafs:document.getElementById("leafs1").value,
        leafsApplication:document.getElementById("leafsApplication1").value,
        periodStyle:document.getElementById("periodStyle1").value,
        notes:{
          samples:document.getElementById("samples1").value,
          artHistory:document.getElementById("artHistory1").value,
          sources:document.getElementById("sources1").value,
          comments:document.getElementById("comments1").value,
          figureCaption:document.getElementById("figureCaption1").value,
        },
      },
      interventions:{
        materials:document.getElementById("materialsInvolved2").value,
        primingGround:document.getElementById("primingGround2").value,
        pigmentsDyes:document.getElementById("pigmentsDyes2").value,
        bindingMedium:document.getElementById("bindingMedium2").value,
        filler:document.getElementById("filler2").value,
        additives:document.getElementById("additives2").value,
        layerVarnish:document.getElementById("layerVarnish2").value,
        leafs:document.getElementById("leafs2").value,
        leafsApplication:document.getElementById("leafsApplication2").value,
        periodStyle:document.getElementById("periodStyle2").value,
        notes:{
          interventions:document.getElementById("interventionsNotes").value,
          samples:document.getElementById("samples2").value,
          sources:document.getElementById("sources2").value,
          comments:document.getElementById("comments2").value,
          figureCaption:document.getElementById("figureCaption2").value,
        },
      },
      restoration:{
        executor:document.getElementById("executor").value,
        responsiblePerson:document.getElementById("responsiblePerson").value,
        investor:document.getElementById("investor").value,
        people:document.getElementById("people").value,
        chronologicalProcess:document.getElementById("chronologicalProcess").value,
        duration:document.getElementById("duration").value,
        notes:{
          comments:document.getElementById("comments3").value,
          figureCaption:document.getElementById("figureCaption3").value,
          chronologicalProcess:document.getElementById("chronologicalProcess").value,
        },
      }
    }


    // MAIN OBJECT //
    var itemDetails = {
    type:itemType,
    info:infoObject,
    data:dataObject,
    basic:basicObject,
    materials:materialsObject,
    details:methodsObject,
    }

    console.log(itemDetails);

    var itemId = Session.get("itemId");
    // WHAT TO DO IF NEW OR EDIT //
    if (!Session.get("itemId")){
      Meteor.call("insertItem", itemDetails, function(error,result){
        if(!error){ Router.go("/gallery/details/"+result); }});
    } else {
      Meteor.call("updateItem", itemId, itemDetails);
      delete Session.keys.itemId;
      Router.go("/gallery/details/"+itemId);
    }

  }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////      PIGMENT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if($('#item-pigment-dye-binder').is(':checked')){

    var itemType = $("input[name='type']:checked").val();

    var basicObject = {
      title:document.getElementById("name").value,
      appearence:document.getElementById("appearence").value,
      altName:document.getElementById("altName").value,
      manufacturer:document.getElementById("manufacturer").value,
      commonName:document.getElementById("commonName").value,
      pigmentType:function(){return $('input[name="material_basic_type"]:checked').val();},
      chemicalFormula:document.getElementById("chemicalFormula").value,
      chemicalName:document.getElementById("chemicalName").value,
      purity:document.getElementById("purity").value,
      stateForm:document.getElementById("stateForm").value,
      grainSize:document.getElementById("grainSize").value,
      periodFrom:document.getElementById("periodFrom").value,
      periodTo:document.getElementById("periodTo").value,
      colorValues:document.getElementById("colorValues").value,
      refractiveIndex:document.getElementById("refractiveIndex").value,
      colorIndex:document.getElementById("colorIndex").value,
      investigated:document.getElementById("methodsTechniques").value,
      notes:{
        briefDescription:document.getElementById("briefDescriptionBasic").value,
        degradation:document.getElementById("degradationNotes").value,
        methodsOfIdentification:document.getElementById("identificationNotes").value,
        sources:document.getElementById("sourcesBasic").value,
      }
    }

    // MAIN OBJECT //
    var itemDetails = {
    type:itemType,
    info:infoObject,
    data:dataObject,
    basic:basicObject,
    details:methodsObject,
    }

    console.log(itemDetails);

    var itemId = Session.get("itemId");
    // WHAT TO DO IF NEW OR EDIT //
    if (!Session.get("itemId")){
      Meteor.call("insertItem", itemDetails, function(error,result){
        if(!error){ Router.go("/gallery/details/"+result); }});
    } else {
      Meteor.call("updateItem", itemId, itemDetails);
      delete Session.keys.itemId;
      Router.go("/gallery/details/"+itemId);
    }

  }
  alert("["+basicObject.title+"] successfully updated");
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// END             ////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////      OF         /////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////          OBJECT //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addUser: function(){
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();
    var full_name = $('[name=full_name]').val();
    var institution = $('[name=institution]').val();
    var telephone = $('[name=telephone]').val();

    var userDetails = {
      username:username,
      password: password,
      profile: {
        full_name: full_name,
        email: email,
        institution: institution,
        telephone: telephone,
        password:password // this is insecure, only admin should see this field
      }
    }
    Meteor.call("createUsers", userDetails);
  },
  editUser: function(){
    var userId = Session.get("userId");
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();
    var full_name = $('[name=full_name]').val();
    var institution = $('[name=institution]').val();
    var telephone = $('[name=telephone]').val();

    var userDetails = {
      username:username,
      password: password,
      profile: {
        full_name: full_name,
        email: email,
        institution: institution,
        telephone: telephone,
        password:password // this is insecure, only admin should see this field
      }
    }
    Meteor.call("editUsers", userId, userDetails)
  }
}