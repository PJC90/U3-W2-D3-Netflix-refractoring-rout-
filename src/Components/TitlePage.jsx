import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap"
import { Grid, Grid3x3Gap } from "react-bootstrap-icons"

const TitlePage = () => {
return(
    <div className="d-flex mx-4">
    <div className="me-auto d-flex ">
        <h2 className="text-white">TV Shows</h2>
        <DropdownButton  title="Genres" as={ButtonGroup} className="p-0 mx-3 border border-white rounded-0" variant="dark">
        <Dropdown.Item >Commedy</Dropdown.Item>
        <Dropdown.Item >Drama</Dropdown.Item>
        <Dropdown.Item >Killer</Dropdown.Item>
      </DropdownButton>
    </div>
    <div className="ms-auto d-flex align-items-center">
    <Grid className="mx-1 text-white"/>
    <Grid3x3Gap className="mx-1 text-white"/>
    </div>
    </div>
)
}

export default TitlePage