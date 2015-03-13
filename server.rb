require "digest/md5"
require 'sinatra'
require 'pry'

get '/' do
  redirect 'index.html'
end

get '/email' do
  email_address = params["email"].downcase
  hash = Digest::MD5.hexdigest(email_address)
  image_src = "http://www.gravatar.com/avatar/#{hash}"
end
