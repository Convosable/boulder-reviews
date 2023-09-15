class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create
        problem = BoulderProblem.find(params[:boulder_problem_id])
        review = problem.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        # review = @current_user.reviews.find(params[:id])
        #if review
            #review.update! 
        review = find_review
        review.update!(review_params)
        render json: review, status: :accepted
    end

    # this works... just need to set up an error message or condition in the frontend so state doesnt update incorrectly
    #ask about still only renderinfg the buttons availble to the user that posted the review...
    def destroy
        review = @current_user.reviews.find(params[:id])
        review.delete
        head :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:date, :completed, :boulder_rating, :notes, :boulder_problem_id, :user_id)
    end

end
