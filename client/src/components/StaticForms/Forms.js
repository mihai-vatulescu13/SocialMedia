import './forms.css'

const Forms = () => {
    return (
        <>
            <div className="formsStatic">
                    <form className="formsAdd">
                     <span className="titleSection">Give as many details as possible!</span>
                      <label className="labelForm">
                        <span className="titleInputs">Add Title</span>
                        <input type="text" className="titleInput" placeholder="Type text here"/>
                      </label>
                      <label className="labelForm">
                        <span className="titleInputs">Category</span>

                      </label>
                      <label className="labelForm">
                        <span className="titleInputs">Images</span>
                        <input type="file" className="images"/>
                      </label>
                      <label className="labelForm">
                        <span className="titleInputs">Description</span>
                        <textarea className="textareaForms"></textarea>
                      </label>
                    </form>
                </div>
                <div className="formsStatic">
                    <form className="formsAdd">
                        <span className="titleSection">Contact information</span>
                    </form>
                </div>
        </>
    )
}

export default Forms
