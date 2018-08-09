class User < ApplicationRecord
    
    validates :username, :password_digest, :session_token, presence: true
    validates :fname, :lname, :email, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 10, allow_nil: true}

    after_initialize :ensure_session_token
  
    def self.find_by_credentials(username, password)
      @user = User.find_by(username: username)
      @user.is_password?(password) ? @user : nil
    end
  
    def password
      @password
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      self.session_token
    end
  
    private
  
    def ensure_session_token
      self.reset_session_token unless self.session_token
    end

  
end
