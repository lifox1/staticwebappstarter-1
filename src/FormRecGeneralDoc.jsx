import React, { useState } from 'react';

function FormRecGeneralDoc(props) {
  const [document, setDocument] = useState(null)

  const parseData = (documents) => {
    const filteredDocs = documents.filter(item => {
      if (item.formrecGeneralDoc) {
        return true
      }
      return false
    })
    if (filteredDocs) {
      return (
        <>
          <div className="filenameHeader">Processed Files (select one)</div>
          {filteredDocs.map(doc => (<div className="filename" onClick={() => { setDocument(doc) }}>{doc.filename}</div>))}
        </>
      )
    }
    return (<></>)
  }

  const renderKVP = () => {
    if (document?.formrecGeneralDoc?.keyValuePairs) {
      return (
        <div >
          <div className="filenameHeader">Key/Value Pairs</div>
          {document.formrecGeneralDoc.keyValuePairs.map(kvp => {
            return (
              <div style={{ display: "flex", borderStyle: "solid", borderWidth: "0 0 1px 0px" }}>
                <div>
                  <div style={{ padding: "20px" }}>
                    Key : {kvp.key.content}
                  </div>
                  <div style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
                    Value : {kvp?.value?.content ? kvp.value.content : ""}
                  </div>
                </div>
                <div style={{ padding: "20px" }}>
                  Confidence Score : {kvp.confidence}
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const renderEntities = () => {
    if (document?.formrecGeneralDoc?.keyValuePairs) {
      return (
        <div style={{paddingLeft : "150px"}}>
          <div className="filenameHeader">Named Entities</div>
          {document.formrecGeneralDoc.entities.map(kvp => {
            return (
              <div style={{ display: "flex", borderStyle: "solid", borderWidth: "0 0 1px 0px" }}>
                <div>
                  <div style={{ padding: "20px" }}>
                    Key : {kvp.content}
                  </div>

                </div>
                <div style={{ padding: "20px" }}>
                  Confidence Score : {kvp.confidence}
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  const renderData = () => {
    if (document) {
      return (<div style={{ display: "flex" }}>
        {renderKVP()}
        {renderEntities()}
      </div>
      )
    }
  }


  return (
    <div className="documentTextParent" style={{ padding: "30px" }}>
      <div className="filenames">
        {parseData(props.documents)}
      </div>
      <div style={{ paddingLeft: "150px" }}>
        {renderData()}
      </div>

    </div>
  )
}

export default FormRecGeneralDoc

