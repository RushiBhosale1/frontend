import React, { useState } from 'react';
import { Modal } from 'antd';

const PdfViewerModal = ({ pdfLink }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open PDF</button>

      <Modal
        title="PDF Viewer"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null} // No footer
        width={800} // Adjust width as needed
      >
        <iframe
          title="PDF Viewer"
          src={pdfLink}
          width="100%"
          height="500px"
          frameBorder="0"
        />
      </Modal>
    </div>
  );
};

export default PdfViewerModal;
