import React from "react";
import "./styles/organization.css";
import { useDispatch } from "react-redux";
import { deleteOrg } from "../../redux/orgSlice";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";

const Organization = ({ id, name, tin, logo, form, type, taxSystems }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);

  const checkFirst = () => {
    setCheckBox1(true);
    setCheckBox2(false);
    setCheckBox3(false);
  };
  const checkSecond = () => {
    setCheckBox1(false);
    setCheckBox2(true);
    setCheckBox3(false);
  };
  const checkThree = () => {
    setCheckBox1(false);
    setCheckBox2(false);
    setCheckBox3(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
    console.log("oprn");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <div className="card-container">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <button onClick={() => console.log(form)}>123</button>
        <DialogContent>
          <p>Редактировать данные организации</p>
          <Tabs
            defaultActiveKey={
              type == "too" ? "too" : type == "ip" ? "ip" : "others"
            }
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="too" title="ТОО">
              <Form>
                <Form.Label>Выберите систему налогообложения</Form.Label>
                <Form.Select aria-label="Default select example">
                  {taxSystems.map((tax) => {
                    return (
                      <option key={tax.id} value={tax.id}>
                        {tax.full}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Group className="mb-3" controlId="bin">
                  <Form.Label style={{ marginTop: "20px" }}>
                    Введите ИИН/БИН
                  </Form.Label>
                  <Form.Control type="text" placeholder="Введите ИИН/БИН" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bin">
                  <Form.Label>Введите название компании</Form.Label>
                  <Form.Label
                    style={{
                      position: "absolute",
                      bottom: "85px",
                      left: "26px",
                      marginBottom: "0",
                      padding: "6px",
                      borderRight: "1px solid #ced4da",
                    }}
                  >
                    ТОО
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название"
                    style={{ paddingLeft: "50px" }}
                  />
                </Form.Group>
                <button className="form-button">Сохранить</button>
              </Form>
            </Tab>
            <Tab eventKey="ip" title="ИП">
              <Form>
                <Form.Label>Выберите систему налогообложения</Form.Label>
                <Form.Select aria-label="Default select example">
                  {taxSystems.map((tax) => {
                    return (
                      <option key={tax.id} value={tax.id}>
                        {tax.full}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Group className="mb-3" controlId="ip">
                  <Form.Label style={{ marginTop: "20px" }}>
                    Введите ИИН/БИН
                  </Form.Label>
                  <Form.Control type="text" placeholder="Введите ИИН/БИН" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ip">
                  <Form.Label>Введите название компании</Form.Label>
                  <Form.Label
                    style={{
                      position: "absolute",
                      bottom: "85px",
                      left: "26px",
                      marginBottom: "0",
                      padding: "6px",
                      borderRight: "1px solid #ced4da",
                    }}
                  >
                    ИП
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название"
                    style={{ paddingLeft: "50px" }}
                  />
                </Form.Group>
                <button className="form-button">Сохранить</button>
              </Form>
            </Tab>
            <Tab eventKey="others" title="Прочие">
              <Form>
                <Form.Group>
                  <Form.Check
                    checked={checkBox1}
                    label="Юридические лица"
                    type="radio"
                    name="group1"
                    id="check1"
                    onChange={() => checkFirst()}
                  />
                  <Form.Check
                    checked={checkBox2}
                    label="Частная практика"
                    type="radio"
                    name="group1"
                    id="check2"
                    onChange={() => checkSecond()}
                  />
                  <Form.Check
                    checked={checkBox3}
                    label="Физические лица"
                    type="radio"
                    name="group1"
                    id="check3"
                    onChange={() => checkThree()}
                  />
                </Form.Group>
                {checkBox1 ? (
                  <div>
                    <Form.Label>Выберите систему налогообложения</Form.Label>
                    <Form.Select aria-label="Default select example">
                      {taxSystems.map((tax) => {
                        return (
                          <option key={tax.id} value={tax.id}>
                            {tax.full}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </div>
                ) : (
                  <div></div>
                )}
                <Form.Group className="mb-3" controlId="other">
                  <Form.Label style={{ marginTop: "20px" }}>
                    Введите ИИН/БИН
                  </Form.Label>
                  <Form.Control type="text" placeholder="Введите ИИН/БИН" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ip">
                  <Form.Label>Введите название компании</Form.Label>
                  <Form.Label
                    style={{
                      position: "absolute",
                      bottom: "85px",
                      left: "26px",
                      marginBottom: "0",
                      padding: "6px",
                      borderRight: "1px solid #ced4da",
                    }}
                  >
                    {checkBox1 || checkBox2 ? "ЮЛ" : "ФЛ"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название"
                    style={{ paddingLeft: "50px" }}
                  />
                </Form.Group>
                <button className="form-button">Сохранить</button>
              </Form>
            </Tab>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <p className="dialog-delete-title">Удаление организации</p>
          <p className="dialog-delete">
            Вы уверены, что хотите удалить организацию из списка?
          </p>
          <div className="dialog-buttons">
            <button
              className="dialog-button-done"
              onClick={() => setOpenDelete(false)}
            >
              Отменить
            </button>
            <button
              className="dialog-button-accept"
              onClick={() => dispatch(deleteOrg(id))}
            >
              Удалить
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="card-logo">
        {logo == null ? (
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="72" height="72" rx="3" fill="#E8ECEE" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.9518 16.1136C19.597 16.2721 19.2757 16.6114 19.139 16.9719C19.0675 17.1604 19.0361 22.6845 19.0361 35.096V52.9488L17.9827 52.9815C17.101 53.0087 16.8857 53.0464 16.6633 53.2126C16.1577 53.5903 16 53.8981 16 54.507C16 55.1162 16.1579 55.424 16.6636 55.8014L16.9298 56H36H55.0702L55.3364 55.8014C55.8421 55.424 56 55.1162 56 54.507C56 53.8981 55.8423 53.5903 55.3367 53.2126C55.1143 53.0465 54.899 53.0087 54.0183 52.9815L52.9657 52.9489L52.9406 38.0346C52.9157 23.1407 52.9154 23.1199 52.7169 22.8543C52.6076 22.708 52.3985 22.499 52.2521 22.3897C51.9913 22.1952 51.8714 22.1905 46.3106 22.1648L40.6354 22.1385L40.6068 19.5469C40.58 17.1036 40.5669 16.94 40.3796 16.6895C40.2703 16.5433 40.0611 16.3344 39.9147 16.2251C39.6505 16.028 39.5788 16.0263 29.9448 16.0055C22.0041 15.9883 20.1884 16.0079 19.9518 16.1136ZM37.5654 33.9835C37.5904 48.8859 37.5907 48.9066 37.7891 49.1722C38.1667 49.6777 38.4748 49.8354 39.0843 49.8354C39.6939 49.8354 40.0019 49.6777 40.3796 49.1722C40.5774 48.9075 40.5784 48.8548 40.6036 37.0658L40.6287 25.2252H45.2542H49.8795V39.0956V52.9659H42.1731H34.4667L34.4382 50.372C34.4113 47.9265 34.3983 47.763 34.2109 47.5124C34.1016 47.3662 33.8924 47.1573 33.746 47.0481C33.4882 46.8556 33.366 46.8494 29.8313 46.8494C26.2967 46.8494 26.1745 46.8556 25.9166 47.0481C25.7702 47.1573 25.5611 47.3662 25.4518 47.5124C25.2644 47.763 25.2514 47.9265 25.2245 50.372L25.196 52.9659H23.6582H22.1205V36.0133V19.0607H29.8305H37.5403L37.5654 33.9835ZM25.2048 23.6841V25.2252H26.747H28.2892V23.6841V22.143H26.747H25.2048V23.6841ZM31.3735 23.6841V25.2252H32.9157H34.4578V23.6841V22.143H32.9157H31.3735V23.6841ZM25.2048 29.8487V31.3898H26.747H28.2892V29.8487V28.3075H26.747H25.2048V29.8487ZM31.3735 29.8487V31.3898H32.9157H34.4578V29.8487V28.3075H32.9157H31.3735V29.8487ZM43.7108 29.8487V31.3898H45.253H46.7952V29.8487V28.3075H45.253H43.7108V29.8487ZM25.2048 36.0133V37.5544H26.747H28.2892V36.0133V34.4721H26.747H25.2048V36.0133ZM31.3735 36.0133V37.5544H32.9157H34.4578V36.0133V34.4721H32.9157H31.3735V36.0133ZM43.7108 36.0133V37.5544H45.253H46.7952V36.0133V34.4721H45.253H43.7108V36.0133ZM25.2048 42.1778V43.719H26.747H28.2892V42.1778V40.6367H26.747H25.2048V42.1778ZM31.3735 42.1778V43.719H32.9157H34.4578V42.1778V40.6367H32.9157H31.3735V42.1778ZM43.7108 42.1778V43.719H45.253H46.7952V42.1778V40.6367H45.253H43.7108V42.1778ZM43.7108 48.3424V49.8836H45.253H46.7952V48.3424V46.8013H45.253H43.7108V48.3424ZM31.3735 51.4247V52.9659H29.8313H28.2892V51.4247V49.8836H29.8313H31.3735V51.4247Z"
              fill="#70808A"
              fill-opacity="0.7"
            />
          </svg>
        ) : (
          <img src={logo.data} alt="img" />
        )}
      </div>
      <div className="card-disc">
        <p className="card-disc-name">
          {form} {name}
        </p>
        <p className="card-disc-tin">ИИН/БИН {tin}</p>
      </div>
      <div className="card-set">
        <button className="card-set-edit" onClick={() => handleClickOpen()}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.6604 1.5291L19.9863 2.20331L21.7827 3.9861L22.4707 3.30148H22.4672L22.4916 3.27715C22.4985 3.25978 22.5055 3.23892 22.5055 3.22154C22.5055 3.19722 22.495 3.16942 22.4742 3.14857H22.4707L22.3943 3.06516L20.8446 1.5291C20.8237 1.51173 20.789 1.49783 20.7542 1.49783V1.49435C20.7195 1.49435 20.6847 1.50478 20.6604 1.5291ZM13.3323 0.156386C13.7458 0.156386 14.0828 0.490009 14.0828 0.903562C14.0828 1.32059 13.7458 1.65422 13.3323 1.65422H3.5685C2.99865 1.65422 2.48092 1.88705 2.10913 2.2589C1.73387 2.63423 1.50107 3.15204 1.50107 3.72545V20.4344C1.50107 21.0009 1.73387 21.5187 2.10913 21.894L2.14388 21.9288C2.51219 22.2832 3.01602 22.5022 3.5685 22.5022H20.2782C20.8446 22.5022 21.3623 22.2693 21.7341 21.894C22.1093 21.5187 22.3421 21.0009 22.3421 20.4344V10.669C22.3421 10.2554 22.6792 9.91833 23.0927 9.91833C23.5062 9.91833 23.8432 10.2554 23.8432 10.669V20.4344C23.8432 21.4144 23.4436 22.3076 22.7973 22.9539C22.151 23.6003 21.258 24 20.2782 24H3.5685C2.61296 24 1.74081 23.6177 1.098 22.9991L1.04936 22.9539C0.403069 22.3076 0 21.4144 0 20.4344V3.72545C0 2.74544 0.403069 1.8523 1.04936 1.20591C1.69565 0.556036 2.58864 0.156386 3.5685 0.156386H13.3323ZM19.6076 0.469157L17.8633 2.20331L21.7827 6.09557L23.527 4.36142C24.1594 3.73241 24.1559 2.70722 23.527 2.08167L21.9009 0.469157C21.2685 -0.156386 20.2365 -0.156386 19.6076 0.469157ZM6.02161 13.9878L17.0989 2.96438L21.0183 6.85665L9.94104 17.8801L4.66302 19.2841L6.02161 13.9878ZM17.0989 5.07385L7.36284 14.7628L6.74434 17.1816L9.17313 16.5352L18.8953 6.85665L17.0989 5.07385Z"
              fill="#005DA1"
            />
          </svg>
        </button>
        <button
          className="card-set-delete"
          onClick={() => handleClickOpenDelete()}
        >
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6239 4.54561V20.9487C19.6239 21.7897 19.2874 22.5543 18.7469 23.1069C18.2064 23.6594 17.4586 24 16.636 24H5.36403C4.5414 24 3.79357 23.6594 3.25309 23.1069C2.71261 22.5543 2.37948 21.7897 2.37948 20.9487V4.54561H0.734235C0.329723 4.54561 0 4.21199 0 3.79496C0 3.38141 0.329723 3.04778 0.734235 3.04778H21.2692C21.6737 3.04778 22 3.38141 22 3.79496C22 4.21199 21.6737 4.54561 21.2692 4.54561H19.6239ZM12.8594 8.06255C12.8594 7.64552 13.1891 7.31191 13.5936 7.31191C13.9981 7.31191 14.3279 7.64552 14.3279 8.06255V18.3597C14.3279 18.7732 13.9981 19.1103 13.5936 19.1103C13.1891 19.1103 12.8594 18.7732 12.8594 18.3597V8.06255ZM7.64833 8.06255C7.64833 7.64552 7.97806 7.31191 8.38257 7.31191C8.78708 7.31191 9.11681 7.64552 9.11681 8.06255V18.3597C9.11681 18.7732 8.78708 19.1103 8.38257 19.1103C7.97806 19.1103 7.64833 18.7732 7.64833 18.3597V8.06255ZM7.20643 1.5013C6.80192 1.5013 6.47219 1.16421 6.47219 0.750655C6.47219 0.337102 6.80192 0 7.20643 0H14.7936C15.1981 0 15.5278 0.337102 15.5278 0.750655C15.5278 1.16421 15.1981 1.5013 14.7936 1.5013H7.20643ZM18.1555 4.54561H3.84456V20.9487C3.84456 21.3762 4.01792 21.7619 4.29326 22.0434C4.5686 22.3249 4.94592 22.5022 5.36403 22.5022H16.636C17.0541 22.5022 17.4348 22.3249 17.7101 22.0434C17.9855 21.7619 18.1555 21.3762 18.1555 20.9487V4.54561V4.54561Z"
              fill="#D20000"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Organization;
