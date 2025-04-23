function submitQuiz() {
    let correctCount = 0; // Đếm số câu đúng
    let unansweredCount = 0; // Đếm số câu chưa trả lời
    let userAnswers = {}; // Lưu đáp án người dùng nhập
    const answers = {
        q1: { correct: "q1-option1", type: "radio", explanation: "Tự động chạy khi có sự kiện" },
        q2: { correct: "q2-option1", type: "radio", explanation: "Redis" },
        q3: { correct: "q3-option1", type: "radio", explanation: "Redis" },
        q4: { correct: "q4-option1", type: "radio", explanation: "READ ONLY" },
        q5: { correct: "q5-option1", type: "radio", explanation: "Lưu trữ dữ liệu thô đa dạng" },
        q6: { correct: "q6-option1", type: "radio", explanation: "Tái sử dụng mã" },
        q7: { correct: "q7-option1", type: "radio", explanation: "Cassandra" },
        q8: { correct: "q8-option1", type: "radio", explanation: "Indexing" },
        q9: { correct: "q9-option1", type: "radio", explanation: "Normalization" },
        q10: { correct: "q10-option1", type: "radio", explanation: "Che giấu logic xử lý" },
        q11: { correct: "q11-option1", type: "radio", explanation: "NoSQL" },
        q12: { correct: "q12-option1", type: "radio", explanation: "Apache Kafka" },
        q13: { correct: "q13-option1", type: "radio", explanation: "Cả dữ liệu có cấu trúc và phi cấu trúc" },
        q14: { correct: "q14-option1", type: "radio", explanation: "Đường đi ngắn nhất" },
        q15: { correct: "q15-option1", type: "radio", explanation: "Xử lý danh mục con" },
        q16: { correct: "q16-option1", type: "radio", explanation: "Phân tích dữ liệu lớn" },
        q17: { correct: "q17-option1", type: "radio", explanation: "Tính toán cục bộ trên window" },
        q18: { correct: "q18-option1", type: "radio", explanation: "Khi tái sử dụng biểu thức phức tạp" },
        q19: { correct: "q19-option1", type: "radio", explanation: "Truy vấn với toán tử > hoặc <" },
        q20: { correct: "q20-option1", type: "radio", explanation: "Insert và Update" },
        q21: { correct: "q21-option1", type: "radio", explanation: "Quy tắc đệ quy" },
        q22: { correct: "q22-option1", type: "radio", explanation: "Machine Learning" },
        q23: { correct: "q23-option1", type: "radio", explanation: "Tính toàn vẹn của dữ liệu" },
        q24: { correct: "q24-option1", type: "radio", explanation: "Cây thư mục" },
        q25: { correct: "q25-option1", type: "radio", explanation: "Có thêm kiểm soát giao dịch và biến" },
        q26: { correct: "q26-option1", type: "radio", explanation: "Replication" },
        q27: { correct: "q27-option1", type: "radio", explanation: "Tốn thêm bộ nhớ" },
        q28: { correct: "q28-option1", type: "radio", explanation: "Apache Flink" },
        q29: { correct: "q29-option1", type: "radio", explanation: "Gửi một câu lệnh duy nhất" },
        q30: { correct: "q30-option1", type: "radio", explanation: "Leaf Node" },
        q31: { correct: "q31-option1", type: "radio", explanation: "CTE" },
        q32: { correct: "q32-option1", type: "radio", explanation: "Truy vấn với toán tử = hoặc <>" },
        q33: { correct: "q33-option1", type: "radio", explanation: "Tính toán trên tập con cụ thể" },
        q34: { correct: "q34-option1", type: "radio", explanation: "Tính nhất quán và toàn vẹn dữ liệu" },
        q35: { correct: "q35-option1", type: "radio", explanation: "Người sử dụng dữ liệu" },
        q36: { correct: "q36-option1", type: "radio", explanation: "Cột trong WHERE, JOIN, ORDER BY" },
        q37: { correct: "q37-option1", type: "radio", explanation: "Qua các lệnh cấp và thu hồi quyền" },
        q38: { correct: "q38-option1", type: "radio", explanation: "Thủ tục tự động chạy khi có sự kiện" },
        q39: { correct: "q39-option1", type: "radio", explanation: "Indexing" },
        q40: { correct: "q40-option1", type: "radio", explanation: "Ghi lại các thay đổi để phục hồi" },
        q41: { correct: "q41-option1", type: "radio", explanation: "Trên tập dữ liệu con" },
        q42: { correct: "q42-option1", type: "radio", explanation: "Giảm truy cập ổ đĩa" },
        q43: { correct: "q43-option1", type: "radio", explanation: "In-Memory Processing" },
        q44: { correct: "q44-option1", type: "radio", explanation: "Sharding" },
        q45: { correct: "q45-option1", type: "radio", explanation: "Duyệt mối quan hệ bạn bè" },
        q46: { correct: "q46-option1", type: "radio", explanation: "Sharding" },
        q47: { correct: "q47-option1", type: "radio", explanation: "Couchbase" },
        q48: { correct: "q48-option1", type: "radio", explanation: "Tương thích ngược" },
        q49: { correct: "q49-option1", type: "radio", explanation: "Caching" },
        q50: { correct: "q50-option1", type: "radio", explanation: "Khó gỡ lỗi" },
        q51: { correct: "q51-option1", type: "radio", explanation: "Xác định cấu trúc cơ sở dữ liệu" },
        q52: { correct: "q52-option1", type: "radio", explanation: "Partitioning" },
        q53: { correct: "q53-option1", type: "radio", explanation: "Giảm lượng truy cập bộ nhớ" },
        q54: { correct: "q54-option1", type: "radio", explanation: "Hỗ trợ truy vấn khoảng" },
        q55: { correct: "q55-option1", type: "radio", explanation: "Graph Database" },
        q56: { correct: "q56-option1", type: "radio", explanation: "Database Designer" },
        q57: { correct: "q57-option1", type: "radio", explanation: "Replication" },
        q58: { correct: "q58-option1", type: "radio", explanation: "Chỉ định row/column theo điều kiện" },
        q59: { correct: "q59-option1", type: "radio", explanation: "Xử lý lỗi (TRY-CATCH)" },
        q60: { correct: "q60-option1", type: "radio", explanation: "Tái sử dụng biểu thức" },
        q61: { correct: "q61-option1", type: "radio", explanation: "Đảm bảo tính nhất quán" },
        q62: { correct: "q62-option1", type: "radio", explanation: "Qua các lệnh tạo và sửa đổi cấu trúc" },
        q63: { correct: "q63-option1", type: "radio", explanation: "Lặp lại đến khi đạt điều kiện" },
        q64: { correct: "q64-option1", type: "radio", explanation: "Xử lý trong bộ nhớ (In-Memory)" },
        q65: { correct: "q65-option1", type: "radio", explanation: "Hàm băm (Hash Function)" },
        q66: { correct: "q66-option1", type: "radio", explanation: "Giảm độ phức tạp của truy vấn phân cấp" },
        q67: { correct: "q67-option1", type: "radio", explanation: "High Availability" },
        q68: { correct: "q68-option1", type: "radio", explanation: "Base table thay đổi cấu trúc" },
        q69: { correct: "q69-option1", type: "radio", explanation: "Dữ liệu thay đổi thường xuyên" },
        q70: { correct: "q70-option1", type: "radio", explanation: "Xử lý dữ liệu phân cấp" },
        q71: { correct: "q71-option1", type: "radio", explanation: "Cột dùng để tìm kiếm khoảng giá trị" },
        q72: { correct: "q72-option1", type: "radio", explanation: "PostgreSQL" },
        q73: { correct: "q73-option1", type: "radio", explanation: "Consistency, Availability, Partition Tolerance" },
        q74: { correct: "q74-option1", type: "radio", explanation: "Cây cân bằng (Tree)" },
        q75: { correct: "q75-option1", type: "radio", explanation: "Sử dụng lại plan cache" },
        q76: { correct: "q76-option1", type: "radio", explanation: "Tự động thực thi hành động" },
        q77: { correct: "q77-option1", type: "radio", explanation: "Two-Phase Commit (2PC)" },
        q78: { correct: "q78-option1", type: "radio", explanation: "Khó xác định phần sử dụng" },
        q79: { correct: "q79-option1", type: "radio", explanation: "Không ghi ra đĩa" },
        q80: { correct: "q80-option1", type: "radio", explanation: "Khi chia sẻ dữ liệu với bên thứ ba" },
        q81: { correct: "q81-option1", type: "radio", explanation: "tăng cường bảo mật bằng cách yêu cầu thêm một lớp xác minh" },
        q82: { correct: "q82-option1", type: "radio", explanation: "Giới hạn tài nguyên truy vấn (query quota)" },
        q83: { correct: "q83-option1", type: "radio", explanation: "Phân tích hành vi truy vấn" },
        q84: { correct: "q84-option1", type: "radio", explanation: "Giảm nguy cơ bị tấn công" },
        q85: { correct: "q85-option1", type: "radio", explanation: "Sử dụng xác thực đa lớp" },
        q86: { correct: "q86-option1", type: "radio", explanation: "Xác minh danh tính người dùng" },
        q87: { correct: "q87-option1", type: "radio", explanation: "Giới hạn số lần đăng nhập sai" },
        q88: { correct: "q88-option1", type: "radio", explanation: "Mã hóa trước khi lưu trữ" },
        q89: { correct: "q89-option1", type: "radio", explanation: "Mã hóa bất đối xứng" },
        q90: { correct: "q90-option1", type: "radio", explanation: "Sử dụng WAF (Web Application Firewall)" },
        q91: { correct: "q91-option1", type: "radio", explanation: "Sử dụng phần cứng bảo mật (HSM)" },
        q92: { correct: "q92-option1", type: "radio", explanation: "SQL Injection" },
        q93: { correct: "q93-option1", type: "radio", explanation: "1" },
        q94: { correct: "q94-option1", type: "radio", explanation: "Sử dụng hệ thống phát hiện xâm nhập (IDS)" },
        q95: { correct: "q95-option1", type: "radio", explanation: "Xác minh liên tục mọi yêu cầu" },
        q96: { correct: "q96-option1", type: "radio", explanation: "Áp dụng chính sách truy cập trên từng hàng" },
        q97: { correct: "q97-option1", type: "radio", explanation: "Thực hiện tính toán mà không lộ dữ liệu" },
        q98: { correct: "q98-option1", type: "radio", explanation: "Luân chuyển khóa định kỳ giúp giảm nguy cơ bị lộ khóa mã hóa, hạn chế thời gian sử dụng của khóa bị xâm phạm và tăng cường bảo mật cho dữ liệu được mã hóa." },
        q99: { correct: "q99-option1", type: "radio", explanation: "Sử dụng chứng chỉ số (digital certificate)" },
        q100: { correct: "q100-option1", type: "radio", explanation: "Sao lưu dữ liệu giúp khôi phục nhanh chóng sau các cuộc tấn công như ransomware hoặc xóa dữ liệu trái phép, giảm thiểu thiệt hại và đảm bảo tính liên tục." },
        q101: { correct: "q101-option1", type: "radio", explanation: "Thay thế dữ liệu bằng mã token không thể đảo ngược" },
        q102: { correct: "q102-option1", type: "radio", explanation: "Sử dụng câu lệnh tham số hóa (parameterized queries) hoặc prepared statements để ngăn chặn việc chèn mã SQL độc hại, vô hiệu hóa khả năng khai thác thời gian phản hồi của tấn công time-based SQL injection." },
        q103: { correct: "q103-option1", type: "radio", explanation: "Có" },
        q104: { correct: "q104-option1", type: "radio", explanation: "Dễ dàng thêm trường mới" },
        q105: { correct: "q105-option1", type: "radio", explanation: "Sử dụng chỉ mục hợp lý" },
        q106: { correct: "q106-option1", type: "radio", explanation: "Không, tùy thuộc vào ứng dụng" },
        q107: { correct: "q107-option1", type: "radio", explanation: "Có, từ phiên bản 4.0" },
        q108: { correct: "q108-option1", type: "radio", explanation: "Linh hoạt trong cấu trúc dữ liệu" },
        q109: { correct: "q109-option1", type: "radio", explanation: "Chỉ mục trên _id" },
        q110: { correct: "q110-option1", type: "radio", explanation: "Không có schema cố định" },
        q111: { correct: "q111-option1", type: "radio", explanation: "remove()" },
        q112: { correct: "q112-option1", type: "radio", explanation: "Không" },
        q113: { correct: "q113-option1", type: "radio", explanation: "BSON" },
        q114: { correct: "q114-option1", type: "radio", explanation: "Một cơ sở dữ liệu NoSQL" },
        q115: { correct: "q115-option1", type: "radio", explanation: "Tiêu tốn bộ nhớ cao" },
        q116: { correct: "q116-option1", type: "radio", explanation: "Collection" },
        q117: { correct: "q117-option1", type: "radio", explanation: "Ngôn ngữ truy vấn dựa trên JSON" },
        q118: { correct: "q118-option1", type: "radio", explanation: "Dữ liệu thay đổi thường xuyên" },
        q119: { correct: "q119-option1", type: "radio", explanation: "Tài liệu lồng nhau" },
        q120: { correct: "q120-option1", type: "radio", explanation: "Binary JSON" },
        q121: { correct: "q121-option1", type: "radio", explanation: "insert()" },
        q122: { correct: "q122-option1", type: "radio", explanation: "Truy vấn dựa trên vị trí" },
        q123: { correct: "q123-option1", type: "radio", explanation: "Khó quản lý giao dịch phức tạp" },
        q124: { correct: "q124-option1", type: "radio", explanation: "Không hoàn toàn" },
        q125: { correct: "q125-option1", type: "radio", explanation: "Tài liệu (Document)" },
        q126: { correct: "q126-option1", type: "radio", explanation: "Sử dụng sharding" },
        q127: { correct: "q127-option1", type: "radio", explanation: "Xử lý và phân tích dữ liệu" },
        q128: { correct: "q128-option1", type: "radio", explanation: "Tài liệu JSON/BSON" },
        q129: { correct: "q129-option1", type: "radio", explanation: "JavaScript" },
        q130: { correct: "q130-option1", type: "radio", explanation: "Có" },
        q131: { correct: "q131-option1", type: "radio", explanation: "Có" },
        q132: { correct: "q132-option1", type: "radio", explanation: "Tập hợp các máy chủ sao chép dữ liệu" },
        q133: { correct: "q133-option1", type: "radio", explanation: "Ứng dụng cần mở rộng ngang" },
        q134: { correct: "q134-option1", type: "radio", explanation: "Collection có kích thước cố định" },
        q135: { correct: "q135-option1", type: "radio", explanation: "Sharding" },
        q136: { correct: "q136-option1", type: "radio", explanation: "Không mạnh về tính toàn vẹn dữ liệu" },
        q137: { correct: "q137-option1", type: "radio", explanation: "ObjectId" },
        q138: { correct: "q138-option1", type: "radio", explanation: "Tạo chỉ mục (Indexing)" },
        q139: { correct: "q139-option1", type: "radio", explanation: "Không" },
        q140: { correct: "q140-option1", type: "radio", explanation: "Tăng tốc độ truy vấn" },
        q141: { correct: "q141-option1", type: "radio", explanation: "Replication" },
        q142: { correct: "q142-option1", type: "radio", explanation: "Có" },
        q143: { correct: "q143-option1", type: "radio", explanation: "Hỗ trợ dữ liệu phi cấu trúc" },
        q144: { correct: "q144-option1", type: "radio", explanation: "Không sử dụng bảng và cột" },
        q145: { correct: "q145-option1", type: "radio", explanation: "Dễ dàng mở rộng dữ liệu lớn" },
        q146: { correct: "q146-option1", type: "radio", explanation: "Phân chia dữ liệu trên nhiều máy chủ" },
        q147: { correct: "q147-option1", type: "radio", explanation: "Hướng tài liệu (Document-oriented)" },
        q148: { correct: "q148-option1", type: "radio", explanation: "Sử dụng hàm băm" },
        q149: { correct: "q149-option1", type: "radio", explanation: "Bảo vệ dữ liệu khi không sử dụng" },
        q150: { correct: "q150-option1", type: "radio", explanation: "Thực hiện tính toán mà không cần giải mã" },
        q151: { correct: "q151-option1", type: "radio", explanation: "Mã hóa dữ liệu trước khi phân mảnh" },
        q152: { correct: "q152-option1", type: "radio", explanation: "Kiểm soát quyền truy cập" },
        q153: { correct: "q153-option1", type: "radio", explanation: "Triển khai kiểm soát truy cập dựa trên vai trò (RBAC), mã hóa dữ liệu nhạy cảm và ghi lại toàn bộ hành động của người dùng trong nhật ký kiểm toán (audit log) để giám sát." },
        q154: { correct: "q154-option1", type: "radio", explanation: "Thuộc tính của người dùng và tài nguyên" },
        q155: { correct: "q155-option1", type: "radio", explanation: "Phân tích mẫu tấn công đã biết" },
        q156: { correct: "q156-option1", type: "radio", explanation: "Sử dụng Prepared Statements và Parameterized Queries" },
        q157: { correct: "q157-option1", type: "radio", explanation: "HTTPS mã hóa dữ liệu truyền giữa client và CSDL, ngăn chặn nghe lén (eavesdropping) và sửa đổi dữ liệu (man-in-the-middle attack), đảm bảo tính toàn vẹn và bảo mật." },
        q158: { correct: "q158-option1", type: "radio", explanation: "Cấp độ tệp hoặc khối lưu trữ" },
        q159: { correct: "q159-option1", type: "radio", explanation: "Triển khai DLP (Data Loss Prevention)" },
        q160: { correct: "q160-option1", type: "radio", explanation: "Xác thực khóa nội bộ (internal key authentication)" },
        q161: { correct: "q161-option1", type: "radio", explanation: "Khóa phiên không thể bị lộ ngay cả khi khóa dài hạn bị xâm phạm" },
        q162: { correct: "q162-option1", type: "radio", explanation: "Giám sát thay đổi quyền bất thường" },
        q163: { correct: "q163-option1", type: "radio", explanation: "Có" },
        q164: { correct: "q164-option1", type: "radio", explanation: "Không" },
        q165: { correct: "q165-option1", type: "radio", explanation: "drop()" },
        q166: { correct: "q166-option1", type: "radio", explanation: "Có" },
        q167: { correct: "q167-option1", type: "radio", explanation: "MongoDB Atlas" },
        q168: { correct: "q168-option1", type: "radio", explanation: "Tự động xóa tài liệu (document) sau một khoảng thời gian xác định" },
        q169: { correct: "q169-option1", type: "radio", explanation: "sort()" },
        q170: { correct: "q170-option1", type: "radio", explanation: "Không hỗ trợ join tốt" },
        q171: { correct: "q171-option1", type: "radio", explanation: "Không, dùng ObjectId" },
        q172: { correct: "q172-option1", type: "radio", explanation: "Chỉ mục cho mảng" },
        q173: { correct: "q173-option1", type: "radio", explanation: "Python" },
        q174: { correct: "q174-option1", type: "radio", explanation: "Tăng tính sẵn sàng" },
        q175: { correct: "q175-option1", type: "radio", explanation: "limit()" },
        q176: { correct: "q176-option1", type: "radio", explanation: "Phân tích dữ liệu lớn" },
        q177: { correct: "q177-option1", type: "radio", explanation: "Quản lý đám mây dễ dàng" },
        q178: { correct: "q178-option1", type: "radio", explanation: "Đảm bảo giá trị không trùng lặp" },
        q179: { correct: "q179-option1", type: "radio", explanation: "Có" },
        q180: { correct: "q180-option1", type: "radio", explanation: "Có, với MongoDB Atlas" },
        q181: { correct: "q181-option1", type: "radio", explanation: "Phân phối tải trên nhiều máy chủ" },
        q182: { correct: "q182-option1", type: "radio", explanation: "Giới hạn dung lượng tự động" },
        q183: { correct: "q183-option1", type: "radio", explanation: "Theo dõi thay đổi trong collection" },
        q184: { correct: "q184-option1", type: "radio", explanation: "Đảm bảo độ bền của dữ liệu" },
        q185: { correct: "q185-option1", type: "radio", explanation: "Tích hợp tự nhiên với JSON" },
        q186: { correct: "q186-option1", type: "radio", explanation: "update()" },
        q187: { correct: "q187-option1", type: "radio", explanation: "Có" },
        q188: { correct: "q188-option1", type: "radio", explanation: "Có" },
        q189: { correct: "q189-option1", type: "radio", explanation: "Elasticsearch" },
        q190: { correct: "q190-option1", type: "radio", explanation: "Có, với oplog" },
        q191: { correct: "q191-option1", type: "radio", explanation: "Tăng độ trễ trong ghi dữ liệu" },
        q192: { correct: "q192-option1", type: "radio", explanation: "$exists" },
        q193: { correct: "q193-option1", type: "radio", explanation: "Có" },
        q194: { correct: "q194-option1", type: "radio", explanation: "find()" },
        q195: { correct: "q195-option1", type: "radio", explanation: "Sharding – phân tán dữ liệu trên nhiều máy chủ để tăng khả năng mở rộng" },
        q196: { correct: "q196-option1", type: "radio", explanation: "Có" },
        q197: { correct: "q197-option1", type: "radio", explanation: "count()" },
        q198: { correct: "q198-option1", type: "radio", explanation: "Có" },
        q199: { correct: "q199-option1", type: "radio", explanation: "$set" },
        q200: { correct: "q200-option1", type: "radio", explanation: "Không" },
        q201: { correct: "q201-option1", type: "radio", explanation: "Có" },
        q202: { correct: "q202-option1", type: "radio", explanation: "Hỗ trợ truy vấn song song" },
        q203: { correct: "q203-option1", type: "radio", explanation: "Sử dụng caching" },
        q204: { correct: "q204-option1", type: "radio", explanation: "Có" },
        q205: { correct: "q205-option1", type: "radio", explanation: "skip()" },
        q206: { correct: "q206-option1", type: "radio", explanation: "Có" },
        q207: { correct: "q207-option1", type: "radio", explanation: "Có" },
        q208: { correct: "q208-option1", type: "radio", explanation: "BigQuery" },
        q209: { correct: "q209-option1", type: "radio", explanation: "Azure Synapse Analytics" },
        q210: { correct: "q210-option1", type: "radio", explanation: "Native Mode, Datastore Mode" },
        q211: { correct: "q211-option1", type: "radio", explanation: "Firestore" },
        q212: { correct: "q212-option1", type: "radio", explanation: "Đúng" },
        q213: { correct: "q213-option1", type: "radio", explanation: "Sử dụng chỉ mục (Indexes)" },
        q214: { correct: "q214-option1", type: "radio", explanation: "Amazon Timestream" },
        q215: { correct: "q215-option1", type: "radio", explanation: "Memorystore" },
        q216: { correct: "q216-option1", type: "radio", explanation: "Sai" },
        q217: { correct: "q217-option1", type: "radio", explanation: "Redis và Memcached" },
        q218: { correct: "q218-option1", type: "radio", explanation: "Azure Cosmos DB" },
        q219: { correct: "q219-option1", type: "radio", explanation: "Amazon Neptune" },
        q220: { correct: "q220-option1", type: "radio", explanation: "Scalability, Consistency, Global Transactions" },
        q221: { correct: "q221-option1", type: "radio", explanation: "10ms" },
        q222: { correct: "q222-option1", type: "radio", explanation: "NoSQL" },
        q223: { correct: "q223-option1", type: "radio", explanation: "BigQuery" },
        q224: { correct: "q224-option1", type: "radio", explanation: "Không, AWS Glue chỉ dùng để xử lý dữ liệu từ S3, không hỗ trợ RDS." },
        q225: { correct: "q225-option1", type: "radio", explanation: "Relational, Distributed" },
        q226: { correct: "q226-option1", type: "radio", explanation: "Amazon Redshift" },
        q227: { correct: "q227-option1", type: "radio", explanation: "Azure SQL Database" },
        q228: { correct: "q228-option1", type: "radio", explanation: "Caching dữ liệu" },
        q229: { correct: "q229-option1", type: "radio", explanation: "Đúng" },
        q230: { correct: "q230-option1", type: "radio", explanation: "High Availability" },
        q231: { correct: "q231-option1", type: "radio", explanation: "Autoscale" },
        q232: { correct: "q232-option1", type: "radio", explanation: "BigQuery" },
        q233: { correct: "q233-option1", type: "radio", explanation: "Sai" },
        q234: { correct: "q234-option1", type: "radio", explanation: "Amazon RDS Snapshots" },
        q235: { correct: "q235-option1", type: "radio", explanation: "Amazon RDS" },
        q236: { correct: "q236-option1", type: "radio", explanation: "Sai" },
        q237: { correct: "q237-option1", type: "radio", explanation: "MySQL và PostgreSQL" },
        q238: { correct: "q238-option1", type: "radio", explanation: "Geo-Replication" },
        q239: { correct: "q239-option1", type: "radio", explanation: "Hỗ trợ toàn bộ SQL Server" },
        q240: { correct: "q240-option1", type: "radio", explanation: "Đúng" },
        q241: { correct: "q241-option1", type: "radio", explanation: "Đúng" },
        q242: { correct: "q242-option1", type: "radio", explanation: "Petabytes" },
        q243: { correct: "q243-option1", type: "radio", explanation: "Đúng" },
        q244: { correct: "q244-option1", type: "radio", explanation: "Đúng" },
        q245: { correct: "q245-option1", type: "radio", explanation: "Kho dữ liệu và phân tích" },
        q246: { correct: "q246-option1", type: "radio", explanation: "Document-based NoSQL" },
        q247: { correct: "q247-option1", type: "radio", explanation: "Đúng" },
        q248: { correct: "q248-option1", type: "radio", explanation: "Đúng" },
        q249: { correct: "q249-option1", type: "radio", explanation: "Amazon ElastiCache" },
        q250: { correct: "q250-option1", type: "radio", explanation: "Phân tích dữ liệu quy mô lớn" },
        q251: { correct: "q251-option1", type: "radio", explanation: "Đúng" },
        q252: { correct: "q252-option1", type: "radio", explanation: "Đúng" },
        q253: { correct: "q253-option1", type: "radio", explanation: "Đúng" },
        q254: { correct: "q254-option1", type: "radio", explanation: "Sử dụng chỉ mục" },
        q255: { correct: "q255-option1", type: "radio", explanation: "Đúng" },
        q256: { correct: "q256-option1", type: "radio", explanation: "Đúng" },
        q257: { correct: "q257-option1", type: "radio", explanation: "Đúng" },
        q258: { correct: "q258-option1", type: "radio", explanation: "Apache Cassandra" },
        q259: { correct: "q259-option1", type: "radio", explanation: "400 KB" },
        q260: { correct: "q260-option1", type: "radio", explanation: "Key-value và wide-column store" },
        q261: { correct: "q261-option1", type: "radio", explanation: "Amazon DynamoDB" },
        q262: { correct: "q262-option1", type: "radio", explanation: "IoT, phân tích chuỗi thời gian" },
        q263: { correct: "q263-option1", type: "radio", explanation: "Đúng" },
        q264: { correct: "q264-option1", type: "radio", explanation: "Đúng" },
        q265: { correct: "q265-option1", type: "radio", explanation: "Đúng" },
        q266: { correct: "q266-option1", type: "radio", explanation: "Đúng" },
        q267: { correct: "q267-option1", type: "radio", explanation: "Đúng" },
        q268: { correct: "q268-option1", type: "radio", explanation: "SQL, MongoDB, Gremlin" },
        q269: { correct: "q269-option1", type: "radio", explanation: "5" },
        q270: { correct: "q270-option1", type: "radio", explanation: "Đúng" },
        q271: { correct: "q271-option1", type: "radio", explanation: "Đúng" },
        q272: { correct: "q272-option1", type: "radio", explanation: "Đúng" },
        q273: { correct: "q273-option1", type: "radio", explanation: "Đúng" },
        q274: { correct: "q274-option1", type: "radio", explanation: "Amazon Aurora Global Database" },
        q275: { correct: "q275-option1", type: "radio", explanation: "Đúng" },
        q276: { correct: "q276-option1", type: "radio", explanation: "Cloud SQL" },
        q277: { correct: "q277-option1", type: "radio", explanation: "Ghi nhận thay đổi dữ liệu" },
        q278: { correct: "q278-option1", type: "radio", explanation: "Đúng" },
        q279: { correct: "q279-option1", type: "radio", explanation: "Azure Cosmos DB" },
        q280: { correct: "q280-option1", type: "radio", explanation: "Đúng" },
        q281: { correct: "q281-option1", type: "radio", explanation: "Chuỗi thời gian" },
        q282: { correct: "q282-option1", type: "radio", explanation: "Dữ liệu chuỗi thời gian và khối lượng lớn" },
        q283: { correct: "q283-option1", type: "radio", explanation: "Đúng" },
        q284: { correct: "q284-option1", type: "radio", explanation: "Amazon Aurora Serverless" },
        q285: { correct: "q285-option1", type: "radio", explanation: "NoSQL key-value store" },
        q286: { correct: "q286-option1", type: "radio", explanation: "Gremlin và SPARQL" },
        q287: { correct: "q287-option1", type: "radio", explanation: "Đúng" },
        q288: { correct: "q288-option1", type: "radio", explanation: "Database Migration Service" },
        q289: { correct: "q289-option1", type: "radio", explanation: "Đúng" },
        q290: { correct: "q290-option1", type: "radio", explanation: "MySQL, PostgreSQL, SQL Server" },
        q291: { correct: "q291-option1", type: "radio", explanation: "AWS DMS (Database Migration Service)" },
        q292: { correct: "q292-option1", type: "radio", explanation: "Eventual và Strong Consistency" },
        q293: { correct: "q293-option1", type: "radio", explanation: "Redis, Memcached" },
    };
    let totalQuestions = Object.keys(answers).length; // Tổng số câu hỏi

    // Reset previous results
    Object.keys(answers).forEach((key) => {
        let resultDiv = document.getElementById(`result-${key}`);
        if (resultDiv) resultDiv.innerHTML = "";
    });

    // Xử lý từng câu hỏi
    Object.keys(answers).forEach((key) => {
        let answer = answers[key];
        let userInput, isCorrect;
        let resultDiv = document.getElementById(`result-${key}`);
        // let isCorrectt = false;

        if (answer.type === "radio") {
            let selectedOption = document.querySelector(`input[name="${key}"]:checked`);
            if (!selectedOption) {
                resultDiv.innerHTML = '<p class="incorrect">Chưa chọn đáp án kìa cu.</p>';
                unansweredCount++;
                return;
            }
            isCorrect = selectedOption.id === answer.correct;
        }
        else if (answer.type === "checkbox") {
            // Lấy các giá trị từ checkbox
            let selectedOptions = document.querySelectorAll(`input[name="${key}"]:checked`);
            let selectedIds = Array.from(selectedOptions).map(option => option.id);

            // Kiểm tra đáp án đúng với những gì người dùng chọn
            isCorrect = selectedIds.length === answer.correct.length &&
                selectedIds.every(id => answer.correct.includes(id)) &&
                answer.correct.every(id => selectedIds.includes(id));

            if (selectedIds.length === 0) {
                resultDiv.innerHTML = '<p class="incorrect">Chưa chọn đáp án kìa cu.</p>';
                unansweredCount++;
                return;
            }
        } else if (answer.type === "input") {
            // Lấy giá trị từ input
            let inputField = document.getElementById(key);
            if (inputField) {
                userInput = inputField.value.trim(); // Lấy giá trị và loại bỏ khoảng trắng
            }
            if (!userInput) {
                resultDiv.innerHTML = '<p class="incorrect">Chưa nhập đáp án.</p>';
                unansweredCount++;
                return;
            }
            isCorrect = userInput.toLowerCase() === answer.correct.toLowerCase();
        } else if (answer.type === "input-pair") {
            // Lấy giá trị từ hai ô nhập liệu
            let horizontalInput = document.getElementById(`${key}-horizontal`);
            let verticalInput = document.getElementById(`${key}-vertical`);

            let horizontalAnswer = horizontalInput ? horizontalInput.value.trim().toLowerCase() : "";
            let verticalAnswer = verticalInput ? verticalInput.value.trim().toLowerCase() : "";

            if (!horizontalAnswer || !verticalAnswer) {
                resultDiv.innerHTML = '<p class="incorrect">Chưa nhập đầy đủ đáp án.</p>';
                unansweredCount++;
                return;
            }

            isCorrect = horizontalAnswer === answer.correct.horizontal &&
                verticalAnswer === answer.correct.vertical;
        }

        // Ghi nhận kết quả
        if (isCorrect) {
            correctCount++;
            resultDiv.innerHTML = '<p class="correct">Khá lắm nhóc</p>';
        } else {
            resultDiv.innerHTML = `<p class="incorrect">Ngu vãi lòng đáp án đúng là "${answer.explanation}"</p>`;
        }
    });

    // Hiển thị tổng số câu đúng / tổng số câu hỏi
    let totalCorrect = document.getElementById("total-correct");
    totalCorrect.innerHTML = `Bạn đã trả lời đúng ${correctCount} / ${totalQuestions} câu.`;
}
