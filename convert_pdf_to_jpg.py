import os
import fitz  # PyMuPDF
from pathlib import Path

# Path folder certificate (relative path)
certificate_folder = "./public/assets/certificate"

# Folder output untuk JPG
output_folder = "./public/assets/certificate/jpg"

# Buat folder output jika belum ada
os.makedirs(output_folder, exist_ok=True)

# Pastikan folder certificate ada
if not os.path.exists(certificate_folder):
    print(f"Folder tidak ditemukan: {certificate_folder}")
    exit()

# Loop semua file PDF di folder
pdf_files = [f for f in os.listdir(certificate_folder) if f.lower().endswith('.pdf')]

if not pdf_files:
    print("Tidak ada file PDF ditemukan di folder")
    exit()

print(f"Ditemukan {len(pdf_files)} file PDF")
print(f"Output folder: {output_folder}\n")

for pdf_file in pdf_files:
    pdf_path = os.path.join(certificate_folder, pdf_file)
    
    try:
        print(f"Memproses: {pdf_file}")
        
        # Buka PDF
        pdf_document = fitz.open(pdf_path)
        
        # Ambil halaman pertama (index 0)
        first_page = pdf_document[0]
        
        # Konversi ke gambar dengan resolusi tinggi
        # zoom 2.0 = 144 DPI, zoom 3.0 = 216 DPI
        zoom = 3.0
        mat = fitz.Matrix(zoom, zoom)
        pix = first_page.get_pixmap(matrix=mat)
        
        # Buat nama file output
        output_filename = f"{Path(pdf_file).stem}.jpg"
        output_path = os.path.join(output_folder, output_filename)
        
        # Simpan sebagai JPG
        pix.save(output_path)
        
        # Tutup PDF
        pdf_document.close()
        
        print(f"  ✓ Tersimpan: {output_filename}\n")
        
    except Exception as e:
        print(f"  ✗ Error pada {pdf_file}: {str(e)}\n")

print("=== Konversi selesai ===")
print(f"Semua file JPG tersimpan di: {output_folder}")
